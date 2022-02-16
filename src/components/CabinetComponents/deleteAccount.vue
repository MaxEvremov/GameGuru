<template>
  <div class="area forname">
      <h4 class="title forname">Вы уверены?</h4>
      </div>
      <div class="buttonbar">
        <button class="button"
        @click="deleteAcc"
        >Удаление</button>
      <button class="button"
      @click="showHideDelete"
      >Отмена</button>
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
.button{
  margin-top: 4px;
  background-color: white;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  padding: 10px;
  min-width: 100px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
