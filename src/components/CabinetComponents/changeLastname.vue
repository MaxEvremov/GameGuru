<template>
  <div class="window">
    <div class="area lastname">
      <h4 class="title color">Введите Фамилию</h4>
      <my-input  v-model="change.lastname"></my-input>
    </div>
    <div class="buttonbar">
      <my-button class="color" @click="changeLastname">Изменить</my-button>
      <my-button class="color" @click="showHideLastname">Закрыть</my-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default ({
  setup() {
    return{
      change:{
        lastname:null
      }
    }
  },
  methods: {
    ...mapActions(['patch']),
    ...mapMutations([
      "showHideLastname"
      ]),
    changeLastname(){
      if ((this.change.lastname.length>3)&&(this.change.lastname!==null)){
        this.patch(this.change)
        this.change.lastname=null
        this.showHideLastname()
        alert("Фамилия успешно изменена!")
      }else{
        alert("Необходимо ввести более 3х символов!")
      }
    }
  }
})
</script>

<style scoped>
.window{
  margin: 10px;
  min-width: 300px;
  min-height:150px;
}
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