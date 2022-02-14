<template>
  <div class="windowCabinet"
  v-if="getAuthStatus===true"
  >
    <div class="settings setTitle">
      <h3>Вы вошли, как:</h3>
      <h2>{{getUserInformation.forname}} {{getUserInformation.lastname}}</h2>
    </div>

    <div class="settings">
      <div class="buttons">
      <button class="button"
      @click="exiteAccount"
      >Выйти</button>
      <div><hr>

        <button class="button"
        v-if="getStatusesSettings.login!==true"
      @click="showHideLogin"
      >Изменить логин</button>
      <changelogin
      v-if="getStatusesSettings.login===true"
      /><hr>

      <button class="button"
      v-if="getStatusesSettings.password!==true"
      @click="showHidePassword"
      >Изменить пароль</button>
      <changepassword
      v-if="getStatusesSettings.password"
      /><hr>

      <button class="button"
      v-if="getStatusesSettings.forname!==true"
      @click="showHideForname"
      >Изменить имя</button>
      <changeforname
      v-if="getStatusesSettings.forname===true"
      /><hr>

      <button class="button"
      v-if="getStatusesSettings.lastname!==true"
      @click="showHideLastname"
      >Изменить фамлию</button>
      <changelastname
      v-if="getStatusesSettings.lastname===true"/>
      </div><hr>

      <div>
        <button class="button content"
        @click="toContentPage"
        >На главную</button>
      </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1 class="notEnterTitle">Вы не вошли в личный кабинет</h1>
    <div>
      <loginCabinet/>
    </div>

    <div>
      <button class="button content"
      @click="toContentPage"
      >На главную страницу</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import changelogin from '../components/CabinetComponents/changeLogin.vue'
import changepassword from '../components/CabinetComponents/changePassword.vue'
import changeforname from '../components/CabinetComponents/changeForname.vue'
import changelastname from '../components/CabinetComponents/changeLastname.vue'
import loginCabinet from '../components/CabinetComponents/loginCabinet.vue'

export default {
  computed: mapGetters(["getUserInformation","getStatusesSettings","getAuthStatus"]),
  methods:{
    ...mapMutations([
    "exiteAccount",
    "showHideLogin",
    "showHidePassword",
    "showHideForname",
    "showHideLastname",
    ]),
    toContentPage(){
      console.log("ИДЕМ К КОНТЕНТУ")
      this.$router.push('/content')
    },
    toUserCabinet(){
      this.$router.push("/cabinet")
    }
  }, 
  components:{
    changelogin,
    changepassword,
    changeforname,
    changelastname,
    loginCabinet,
  }
}
</script>

<style scoped>
.windowCabinet{
  background-color: white;
  width: 80vw;
  margin: auto;
  border-radius: 10px;
}
.notEnterTitle{
  color: #7088a1;
}
.settings{
  padding: 5px;
  margin-top: 20px;
}
.button{
  margin-top: 4px;
  background-color: white;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}
.content{
  font-size: 20px;
  font-weight: bold;
  border:1px solid black;
  padding: 10px;
  border-radius: 10px;
}
</style>