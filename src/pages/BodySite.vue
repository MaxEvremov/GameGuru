<template>
  <div class="bodysite">
    <div class="modal"
    >
      <ModalMenu
      />
      <router-view/>
    </div>
    <ColorBar
    v-if="qwe"
    />
  </div>
</template>

<script>
import ColorBar from '@/components/ColorBar.vue'
import ModalMenu from '@/components/ModalMenu.vue'
export default {
  components:{
    ColorBar,
    ModalMenu
  }
}
</script>

<style scoped>
.bodysite{
  width: 100%;
  height: 800px;
}
</style>