<template>
<div>
  <router-view/>
  <!-- <BodySite/> -->
</div>
</template>

<script>
// import BodySite from './pages/BodySite'

export default {
  name: 'App',
  components: {
    // BodySite
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17222c;
  background-color: #171320;
  box-sizing: border-box;
}
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
