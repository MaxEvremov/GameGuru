<template>
  <div class="registrationWindow">
    <div>
      <div>
        <h2>Регистрация на сайте GameGuru.ru</h2>
      </div>
      <hr>
      <div class="area email">
        <h4 class="title email">Введите желаемый Логин</h4>
        <!-- <my-image></my-image> -->
        <input class="input email" type="email" v-model="user.login">
      </div>
      <div class="area password">
        <h4 class="title password">Введите желаемый Пароль</h4>
        <!-- <my-image></my-image> -->
        <input class="input password" type="password" v-model="user.password" @input="checkPassword">
      </div>
      <div class="area password_confirm">
        <h4 class="title password_confirm">Повторите Пароль</h4>
        <!-- <my-image></my-image> -->
        <input class="input password_confirm" type="password" v-model="user.password_confirm" @input="confirmPassword">
      </div>
      <div class="area forname">
        <h4 class="title forname">Введите ваше Имя</h4>
        <!-- <my-image></my-image> -->
      <input class="input forname" type="text" v-model="user.forname" @input="confirmForname">
      </div>
      <div class="area lastname">
        <h4 class="title lastname">Введите вашу Фамилию</h4>
        <!-- <my-image></my-image> -->
      <input class="input lastname" type="text" v-model="user.lastname" @input="confirmLastname">
      </div>
      <div class="area">
        <h4 class="title">Введите ваш возраст</h4>
        <input class="input age" type="text" v-model="user.age">
      </div>
      <hr>
      <div class="buttonbar">
        <my-button @click="registerUser">Регистрация</my-button>
        <my-button @click="cleanAllInput">Удалить всё</my-button>
        <my-button @click="closeAll">Закрыть окно регистрации</my-button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data(){
    return{
      user:{
        login:null,
        password:null,
        password_confirm:null,
        forname:null,
        lastname:null,
        age:null
      },
      confirmed:{
        password:null,
        forname:null,
        lastname:null
      }
    }
  },
  methods:{
    ...mapMutations(["findLogin","nullContemporaneity","closeAll"]),
    ...mapActions(['newUser']),
    checkPassword(){
      if (this.user.password.length<1){
        this.confirmed.password = null
      }else if(this.user.password.length<6){
        this.confirmed.password = false
      }else{
        this.confirmed.password = true
      }
    },
    confirmPassword(){
      if (this.user.password===this.user.password_confirm){
        this.confirmed.password_confirm = true
      }else{
        this.confirmed.password_confirm = false
      }
    },
    confirmForname(){
      if(this.user.forname.length>3){
        this.confirmed.forname = true
      }else{
        this.confirmed.forname = null
      }
    },
    confirmLastname(){
      if(this.user.lastname.length>3){
        this.confirmed.lastname = true
      }else{
        this.confirmed.lastname = null
      }
    },
    registerUser(){
      this.newUser(this.user)
      this.cleanAllInput()
      this.closeAll()

    },
    cleanAllInput(){
      this.user.login = null,
      this.user.password = null,
      this.user.password_confirm = null,
      this.user.forname = null,
      this.user.lastname = null,
      this.confirmed.password = null,
      this.confirmed.password_confirm = null,
      this.confirmed.lastname = null,
      this.confirmed.forname = null,
      this.nullContemporaneity()
    }
  }
}
</script>

<style scoped>
.registrationWindow{
  display: grid;
  background-color: white;
  position: absolute;
  width: 550px;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 144, 255, 0.69);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 144, 255, 0.69);
  box-shadow: 0px 0px 6px 1px rgba(0, 144, 255, 0.90);
  z-index: 1;
}
.area{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60px;
  padding: 10px;
  align-items: center
}
.title{
  padding: 0;
}
.input{
  height: 30px;
}
.age{
  width: 60px;
}
.buttonbar{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center
}
.img{
  margin-top: 5px;
  width: 30px;
}
.reject{
  width: 24px;
  margin-top: 2px;
}

</style>