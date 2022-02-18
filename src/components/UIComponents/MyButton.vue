<template>
  <h4 class="button" @mouseenter="higlight" @mouseleave="higlight" :class="{ colored: highlighting}">
    <slot></slot>
  </h4>
</template>

<script>
export default {
  data(){
    return{
      highlighting:false
    }
  },
  name: 'my-button',
  methods: {
    higlight(){
      this.highlighting=!this.highlighting
    }
  }
}
</script>

<style scoped>
.button{
    cursor: pointer;
    margin: 10px;
}
.colored{
  color: #f04012;
  transition: color 0.5s ease;
}
</style>
