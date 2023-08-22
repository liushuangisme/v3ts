<template>
    <div class="content">
      <h1 class="top_title">待办事项</h1>
      <ul class="todos">
        <li v-for="(todo, index) in todos" :key="index">
          <TodoItem :todo="todo" @remove="removeTodo(index)" />
        </li>
      </ul>
      <button class="btn" @click="addTodo">添加</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import TodoItem from '@/components/todo.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
      TodoItem,
    },
    data() {
      return {
        todos: [] as { text: string; done: boolean }[],
      };
    },
    methods: {
      addTodo() {
        this.todos.push({ text: '', done: false });
      },
      removeTodo(index: number) {
        this.todos.splice(index, 1);
      },
    },
  });
  </script>
  <style scoped lang="scss">
.content{
    .top_title{
        color:darkslategray;
    }
    .btn{
        background-color: steelblue;
        color:aliceblue;
    }
}
  </style>
  