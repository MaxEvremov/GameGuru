<template>
  <div class="window" v-if="!getAuthStatus">

    <my-input type="email" v-model="user.login" placeholder="login or e-mail"/>
    <my-input type="password" v-model="user.password" placeholder="password"/>
    <!-- <div class="input">

      <input
      type="email"
      v-model="user.login"
      >

    </div> -->

    <!-- <div class="input">

      <input
      type="password"
      v-model="user.password"
      >

    </div> -->
    <div class="buttons">
      <my-button @click="enterToCabinet">Войти</my-button>
      <my-button @click="closeAndNulledTry">Закрыть</my-button>
      <!-- <button class="button"
      @click="enterToCabinet"
      >Войти</button> -->
      <!-- <button class="button"
      @click="closeAndNulledTry"
      >Закрыть</button> -->
    </div>
    <div class="alert" v-if="getTryEnter">
      <p class="text">Неверный логин или пароль</p>
      <p class="text">Проверьте Caps Lock</p>
      <p class="text">Либо зарегестрируйтесь</p>
      <my-button @click="showRegistration">Регистрация</my-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      user:{
        login:null,
        password:null}
    }
  },
  computed: mapGetters(["getAuthStatus", "getUserInformation","getTryEnter"]),
  methods:{
    ...mapMutations(["verification", "closeAll","nulledTryEnter","showRegistration"]),
    ...mapActions(['authUser']),
    closeAndNulledTry(){
      this.closeAll(),
      this.nulledTryEnter(),
      this.cleanInputs()
    },
    cleanInputs(){
      this.user.login=null,
      this.user.password=null
    },
    enterToCabinet(){
      this.authUser(this.user),
      this.cleanInputs()
    }
  }
}
</script>

<style scoped>
.window{
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  width: 200px;
  /* height: 130px; */
  margin-left: 100px;
}
.window__open{
height: 220px;
}
.buttons{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.button{
  margin-top: 4px;
  background-color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.text{
  color: rgb(139, 16, 16);
  font-size: 14px;
  width: 200px;
  height: 8px;
  margin-bottom: 25px;
}
</style>