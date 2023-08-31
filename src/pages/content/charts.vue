<script setup lang="ts">
    import GuageChart from '@/components/GuageChart.vue'
    import { ref } from 'vue'
    const gaugeData = ref([
        {
          value: 80,
          name: 'Rating'
        }
      ])
    </script>
    <template>
      <div>
        <h1 style="color: aquamarine;">GaugeChart 参考文档</h1>
        <ul class="m-list">
          <li>
            <a class="u-file" href="https://echarts.apache.org/handbook/zh/get-started" target="_blank">使用手册</a>
          </li>
          <li>
            <a class="u-file" href="https://echarts.apache.org/handbook/zh/basics/import" target="_blank">在项目中引入 ECharts</a>
          </li>
          <li>
            <a class="u-file" href="https://echarts.apache.org/zh/option.html#series-gauge" target="_blank">gauge 配置项</a>
          </li>
          <li>
            <a class="u-file" href="https://echarts.apache.org/zh/builder.html" target="_blank">ECharts 在线定制</a>
          </li>
        </ul>
        <GaugeChart
          :gaugeData="gaugeData"
          :width="800"
          :height="500" />
      </div>
    </template>
    