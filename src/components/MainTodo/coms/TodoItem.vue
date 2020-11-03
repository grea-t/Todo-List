<template>
  <div class="todo-item">
    <input type="checkbox">
    <lable>todo1</lable>
    <button></button>
  </div>
</template>

<script>
  export default {
    name: "TodoItem"
  }
</script>

<style lang="stylus" scoped>
  .todo-item
    display flex
    justify-content space-between
    padding 10px
    font-size 24px

    &:hover
      button:after
        content 'x'
        font-size 24px
        color rgb(254, 67, 101)

    &:completed
      label
        color #d9d9d9
        text-decoration line-through

    input
      width 50px
      height 30px
      text-align center
      appearance none
      border none
      outline none

      &:after
        content url("../../../assets/images/unchecked.png")

      &:checked:after
        content url("../../../assets/images/checked.png")

    label
      flex 1
      transition color 0.4s
    button
      width 40px
      background-color: transparent
      appearance none
      border none
      outline none
      cursor pointer
</style>