<template>
  <h4 class="button">
    <slot></slot>
  </h4>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button{
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
}
</style>
