<template>
    <div class="content">
      <input class="chbox" type="checkbox" v-model="todo.done">
      <span class="text_con" v-if="todo.done">{{ todo.text }}</span>
      <input class="text_ipt" v-else type="text" v-model="todo.text">
      <div class="delebtn" @click="$emit('remove')">删除</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TodoItem',
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  <style scoped lang="scss">
.content{
    display: flex;
    text-align: left;
    .chbox{
        color:rgb(11, 152, 152);
        background-color: rgb(177, 201, 201);
    }
    .text_con{
        display: block;
        color:darkslategrey;
        height: 36px;
        line-height: 36px;
        margin: 10px;
    }
    .text_ipt{
        width: 100px;
        height: 36px;
        border: none;
        background-color: rgb(101, 125, 146);
        color: darkslategrey;
        padding-left: 10px;
        border-radius: 10px;
        margin: 10px 10px;
        outline: none;
    }
    .delebtn{
        color: aliceblue;
        background-color: darkslategray;
        height: 36px;
        line-height: 36px;
        border-radius: 10px;
        padding:0 20px;
        margin: 10px 10px;
    }
}
  </style>
  