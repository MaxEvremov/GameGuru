<template>
  <div class="window"
  :class="{
    window__open:getTryEnter
  }"
  >
    <div>
      <h3>Войдите или зарегестрируйтесь</h3>
    </div>
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
      @click="authUser(user)"
      >Войти</button>
      <button class="button"
      @click="showRegistration"
      >Зарегестрироваться</button>
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
    ...mapMutations([ "closeAll","nulledTryEnter","showRegistration"]),
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
  width: 400px;
  height: 200px;
  margin:auto;
  background-color: white;
  border-radius: 20px;
}
.window__open{
height: 290px;
}
.buttons{
  display: grid;
  grid-template-columns: 1fr;
}
.button{
  margin-top: 4px;
  background-color: white;
  border: none;
  font-size: 16px;
}
.notEnter{
  margin: auto;
}
.text{
  color: rgb(139, 16, 16);
  font-size: 14px;
  width: 200px;
  height: 8px;
}
</style>