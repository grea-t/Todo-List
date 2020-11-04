<template>
  <div class="todo-info">
    <span>1 item left</span>
    <div>
      <a v-for="(item,index) in states" :key="index">{{item}}</a>
    </div>
    <button>Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: "TodoInfo",
    data() {
      return {
        states: ['all', 'active', 'completed']
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .todo-info
    display flex
    padding 5px 10px
    justify-content space-between
    font-weight 400
    line-height 30px
    border-top 1px solid rgba(0, 0, 0, 0.1)

    span
      color rgb(252, 157, 154)

    div
      display flex
      justify-content space-between
      width 200px

      a
        padding 0 10px
        border 1px solid rgb(252, 157, 154)
        border-radius 5px
        cursor pointer

        &:actived
          background-color: rgb(252, 157, 154)
          color #fff

    button
      padding 0 10px
      background-color: rgb(131, 175, 155)
      border-radius 5px
      color #fff
      appearance none
      border none
      outline none
      cursor pointer
</style>