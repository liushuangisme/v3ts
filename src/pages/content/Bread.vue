<script setup lang="ts">
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import { ref } from 'vue'
    const routes = ref([
        {
          path: '/first', // 路由地址
          query: { id: 1, tab: 2 }, // 路由参数
          name: '一级路由' // 路由名称
        },
        {
          path: '/second',
          name: '二级路由'
        },
        {
          path: '/third',
          name: '三级路由三级路由三级路由三级路由三级路由三级路由三级路由'
        }
      ])
    </script>
    <template>
      <div>
        <h2 class="mb10">Breadcrumb 面包屑基本使用</h2>
        <Breadcrumb :routes="routes" />
        <h2 class="mt30 mb10">使用自定义分隔符: / (separator: /)</h2>
        <Breadcrumb :routes="routes" separator="/" />
        <h2 class="mt30 mb10">新页面打开目标链接: / (target: _blank)</h2>
        <Breadcrumb :routes="routes" target="_blank" />
        <h2 class="mt30 mb10">自定义样式</h2>
        <Breadcrumb :routes="routes" :font-size="18" :height="36" :max-width="240" />
      </div>
    </template>
    <style>
        .mb10{
            color: brown;
        }
    </style>
     