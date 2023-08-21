import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    todos: [] as { id: number; text: string; done: boolean }[]
  }),
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    activeTodos(state) {
      return state.todos.filter(todo => !todo.done)
    }
  },
  actions: {
    addTodo(text: string) {
      const newTodo = {
        id: Date.now(),
        text,
        done: false
      }
      this.todos.push(newTodo)
    },
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    deleteTodo(id: number) {
        console.log(id)
        console.log(this.todos)
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
})
