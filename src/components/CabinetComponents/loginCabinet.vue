<template>
  <div class="window">
    <div>
      <h3>Войдите или зарегестрируйтесь</h3>
    </div>

    <my-input type="email" v-model="user.login" placeholder="login or e-mail"></my-input>
    <my-input type="password" v-model="user.password" placeholder="password"></my-input>
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

      <my-button @click="enterToCabinet()">Войти</my-button>
      <my-button @click="showRegistration()">Зарегестрироваться</my-button>
      <my-button @click="toContentPage()">Перейти на главную страницу</my-button>
      
      
      <!-- <div> -->
      <!-- <button class="button content"
      @click="toContentPage"
      >На главную страницу</button>
      </div> -->
      <!-- <button class="button"
      @click="enterToCabinet()"
      >Войти</button> -->
      <!-- <button class="button"
      @click="showRegistration"
      >Зарегестрироваться</button> -->
    </div>
    <div class="notEnter" v-if="getTryEnter">
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
      this.authUser(this.user),
      this.cleanInputs()
    },
    toContentPage(){
      console.log("ПИЗДУЕМ К КОНТЕНТУ")
      this.$router.push('/content')
    },
  }
}
</script>

<style scoped>
.window{
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  width: 360px;
  margin:auto;
  background-color: white;
  border-radius: 20px;
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
  cursor: pointer;
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