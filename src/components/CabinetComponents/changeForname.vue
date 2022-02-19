<template>
  <div class="window">
    <div class="area">
      <h4 class="title color">Введите Имя</h4>
      <my-input v-model="change.forname" @input="confirmForname"/>
    </div>
    <div class="buttonbar">
      <my-button class="color" @click="changeForname">Изменить</my-button>
      <my-button class="color" @click="showHideForname">Закрыть</my-button>
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
      "showHideForname"
      ]),
      ...mapActions(['patch']),
     changeForname(){
       console.log("123123123")
      if(this.change.forname.length>3&&this.change.forname!==null){
        this.patch(this.change)
        this.change.forname=null
        this.showHideForname()
        alert("Имя успешно изменено!")
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
