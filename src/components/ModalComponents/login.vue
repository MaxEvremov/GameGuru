<template>
  <div class="window"
  :class="{
    window__open:getTryEnter
  }"
  v-if="!getAuthStatus"
  >
    <div class="input">

      <input
      type="email"
      v-model="user.login"
      >

    </div>

    <div class="input">

      <input
      type="password"
      v-model="user.password"
      >

    </div>
    <div class="buttons">
      <button class="button"
      @click="enterToCabinet"
      >Войти</button>
      <button class="button"
      @click="closeAndNulledTry"
      >Закрыть</button>
    </div>
    <div class="notEnter"
    v-if="getTryEnter"
    >
      <p class="text">Неверный логин или пароль</p>
      <p class="text">Проверьте Caps Lock</p>
      <p class="text">Либо зарегестрируйтесь</p>
    </div>
    <div class="registration"
    >
      <button class="button"
      @click="showRegistration"
      >Регистрация</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
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
      this.verification(this.user),
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
  height: 130px;
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
}
.text{
  color: rgb(139, 16, 16);
  font-size: 14px;
  width: 200px;
  height: 8px;
}
</style>