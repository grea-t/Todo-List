<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" v-model="content"/>
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(item,index) of tododata" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  import './assets/styles/global.styl'

  export default {
    name: 'App',
    data() {
      return {
        tododata: ['todo1', 'todo2', 'todo3'],
        content: ''
      }
    },
    methods: {
      addTodo() {
        if (this.content === "") return
        this.tododata.push(this.content)
        this.content = ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  li:nth-of-type(odd)
    color blue
</style>