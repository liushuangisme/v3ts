<template>
    <div>
      <input type="text" v-model="obj.name"> 
      <button @click="stopWatchEffect">停止监听</button>
    </div>
  </template>
  <script>
  import { reactive, watchEffect } from 'vue';
  export default {
    setup(){
      let obj = reactive({
        name:'zs'
      });
      const stop = watchEffect(() => {
        console.log('name:',obj.name)
      })
      const stopWatchEffect = () => {
        console.log('停止监听')
        stop();
      }
  
      return {
        obj,
        stopWatchEffect,
      }
    }
  }
  </script>