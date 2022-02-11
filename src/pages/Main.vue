<template>
  <div class="main">
    <div class="modalContent" @mouseleave="closeModalWindow">
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeModalWindow(){
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>
.main{
  height: 0px;
}
.modalContent{
  position: absolute;
}
</style>