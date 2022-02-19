<template>
  <div class="area forname">
    <h4 class="title color">Вы уверены?</h4>
    <div class="buttonbar">
      <my-button class="color" @click="deleteAcc">Удаление</my-button>
      <my-button class="color" @click="showHideDelete">Отмена</my-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default ({
  setup() {
    return{
      change:{
        forname:null
      }
    }
  },
  methods: {
    ...mapMutations([
      "showHideDelete"
      ]),
      ...mapActions(['deleteAccount']),
      deleteAcc(){
        this.showHideDelete()
        this.deleteAccount()
      }
    }
})
</script>

<style scoped>
.buttonbar{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  max-width: 250px;
  margin: auto;
}
.color{
  color: rgb(168, 168, 255);
}
</style>
