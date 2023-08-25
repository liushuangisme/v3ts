// @ts-ignore 兼容性 requestAnimationFrame
export const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
// @ts-ignore 兼容性 cancelAnimationFrame
export const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
// 使用 requestAnimationFrame 模拟 setTimeout 和 setInterval
export function rafTimeout (fn: Function, delay = 0, interval = false): object {
  // @ts-ignore
  const requestAnimationFrame = typeof window !== 'undefined' ? (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) : () => {}
  var start: any = null
  function timeElapse (timestamp: number) {
    /*
      timestamp参数：与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻
    */
    if (!start) {
      start = timestamp
    }
    const elapsed = timestamp - start
    if (elapsed >= delay) {
      fn() // 执行目标函数func
      if (interval) { // 使用间歇调用
        start = null
        raf.id = requestAnimationFrame(timeElapse)
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse)
    }
  }
  const raf = { // 引用类型保存，方便获取 requestAnimationFrame()方法返回的 ID.
    id: requestAnimationFrame(timeElapse)
  }
  return raf
}
// 用于取消 rafTimeout 函数
export function cancelRaf (raf: { id: number }): void {
  // @ts-ignore
  const cancelAnimationFrame = typeof window !== 'undefined' ? (window.cancelAnimationFrame || window.mozCancelAnimationFrame) : () => {}
  if (raf && raf.id) {
    cancelAnimationFrame(raf.id)
  }
}


/*
  timestamp: 13位时间戳 | new Date() | Date()
  console.log(dateFormat(1714528800000, 'YY-MM-DD HH:mm:ss'))
  format => YY：年，M：月，D：日，H：时，m：分钟，s：秒，SSS：毫秒
*/
export function dateFormat (timestamp: number|string|Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
  var date = new Date(timestamp)
  function fixedTwo (value: number): string {
    return value < 10 ? '0' + value : String(value)
  }
  var showTime = format
  if (showTime.includes('SSS')) {
    const S = date.getMilliseconds()
    showTime = showTime.replace('SSS', '0'.repeat(3 - String(S).length) + S)
  }
  if (showTime.includes('YY')) {
    const Y = date.getFullYear()
    showTime = showTime.includes('YYYY') ? showTime.replace('YYYY', String(Y)) : showTime.replace('YY', String(Y).slice(2, 4))
  }
  if (showTime.includes('M')) {
    const M = date.getMonth() + 1
    showTime = showTime.includes('MM') ? showTime.replace('MM', fixedTwo(M)) : showTime.replace('M', String(M))
  }
  if (showTime.includes('D')) {
    const D = date.getDate()
    showTime = showTime.includes('DD') ? showTime.replace('DD', fixedTwo(D)) : showTime.replace('D', String(D))
  }
  if (showTime.includes('H')) {
    const H = date.getHours()
    showTime = showTime.includes('HH') ? showTime.replace('HH', fixedTwo(H)) : showTime.replace('H', String(H))
  }
  if (showTime.includes('m')) {
    var m = date.getMinutes()
    showTime = showTime.includes('mm') ? showTime.replace('mm', fixedTwo(m)) : showTime.replace('m', String(m))
  }
  if (showTime.includes('s')) {
    var s = date.getSeconds()
    showTime = showTime.includes('ss') ? showTime.replace('ss', fixedTwo(s)) : showTime.replace('s', String(s))
  }
  return showTime
}