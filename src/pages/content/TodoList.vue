<template>
    <div>
      <input type="text" v-model="newTodoText" @keyup.enter="addTodo" />
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" @change="toggleTodo(todo.id)" />
          {{ todo.text }}
          <button @click="deleteTodo(todo.id)">Delete</button>
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
  