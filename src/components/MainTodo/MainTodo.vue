<template>
  <div class="main-todo">
    <input type="text" class="add-todo" placeholder="What to do?" autofocus/>
  </div>
</template>

<script>
  export default {
    name: "MainTodo"
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin 0 auto
    width 600px
    background-color: #fff
    box-shadow 0 0 5px #666

    .add-todo
      padding 16px 16px 16px 36px
      width 100%
      font-size 24px
      font-family inherit
      font-weight inherit
      color inherit
      border-bottom none
      outline none
      box-sizing border-box
</style>