<template>
  <div class="window">
    <div class="area ">
      <h4 class="title password">Введите желаемый Пароль</h4>
      <my-input  v-model="change.password" @input="checkPassword"></my-input>
    </div>
    <div class="area ">
      <h4 class="title password">Повторите Пароль</h4>
      <my-input  v-model="passw2" @input="confirmPassword"></my-input>
    </div>
    <div class="buttonbar">
      <my-button @click="changePassword">Изменить</my-button>
      <my-button @click="showHidePassword">Закрыть</my-button>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapActions} from 'vuex'
export default {
  data(){
    return{
      change:{
        password:null
      },
      passw2:null,
      confirmed_passw1:null,
      confirmed_passw2:null
    }
  },
  methods: {
    ...mapMutations([
      "showHidePassword"
      ]),
    ...mapActions(['patch']),

    checkPassword(){
      if (this.change.password.length<1){
        this.confirmed_passw1 = null
      }else if(this.change.password.length<6){
        this.confirmed_passw1 = false
      }else{
        this.confirmed_passw1 = true
      }
    },
    confirmPassword(){
      if (this.change.password===this.passw2){
        this.confirmed_passw2 = true
      }else{
        this.confirmed_passw2 = false
      }
    },
    changePassword(){
      if (this.confirmed_passw1&&this.confirmed_passw2){
        this.patch(this.change)
        this.change.password=null
        this.passw2=null
        this.confirmed_passw1=null
        this.confirmed_passw2=null
        this.showHidePassword()
        alert("Пароль успешно изменен!")
      }else{
        alert("Пароль говно или не совпадает!")
      }
    }
  }
}
</script>

<style scoped>
.window{
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  min-width: 300px;
  align-content: center
}
.area{
  gap: 10px;
  margin: 10px;
  padding: 10px;
  align-items: center
}
.title{
  margin: 0;
  color: rgb(168, 168, 255);
}
.input{
  margin-top: 20px;
}
.img{
  margin-top: 5px;
  width: 30px;
}
.buttonbar{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  max-width: 250px;
  margin: auto;
}
.button{
  color: rgb(168, 168, 255);
}
</style>