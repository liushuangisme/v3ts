<template>
    <div class="content">
      <div class="title_name">添加记事项</div>
      <input class="ipt" type="text" v-model="newTodoText" @keyup.enter="addTodo" />
      <ul class="ul_con">
        <li class="todos" v-for="todo in todos" :key="todo.id">
          <input class="chbox" type="checkbox" v-model="todo.done" @change="toggleTodo(todo.id)" />
          <div class="cont_bady" @change="toggleTodo(todo.id)">{{ todo.text }}</div>
          <div class="btn" @click="deleteTodo(todo.id)">Delete</div>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent,ref } from 'vue'
  import { useTodoStore } from '@/store/todo.ts'
  
  export default defineComponent({
    name: 'TodoList',
    setup() {
      const todoStore = useTodoStore()
      const newTodoText = ref('')
  
      function addTodo() {
        todoStore.addTodo(newTodoText.value)
        newTodoText.value = ''
      }
      function deleteTodo(id){
        todoStore.deleteTodo(id)
      }
  
      return {
        todos: todoStore.todos,
        newTodoText,
        addTodo,
        toggleTodo: todoStore.toggleTodo,
        deleteTodo,
      }
    }
  })
  </script>

  <style scoped lang="scss">
.content{
  .title_name{
    color:darkslategray;
    font-weight: bold;
    font-size: 24px;
  }
  .ipt{
    width: 200px;
    height: 36px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: rgb(132, 134, 136);
  }
  .ul_con{
    list-style: none;
    color: black;
    .todos{
      text-align: left;
      display: flex;
      margin: 10px 0;
      .chbox{
        background-color: aquamarine;
        cursor: pointer;

      }
      .cont_bady{
        height: 35;
        line-height: 32px;
        cursor: pointer;
      }
      .btn{
        width: 80px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: darkslategray;
        margin: 0 10px;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
}
  </style>
  