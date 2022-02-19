<template>
  <div class="windowCabinet" v-if="getAuthStatus===true">

    <div class="settings">
      <h3 class="title">Вы вошли, как:</h3>
      <h2>{{getUserInformation.forname}} {{getUserInformation.lastname}}</h2>
    </div>
    <div class="buttons" >
      <my-button v-if="getStatusesSettings.settings!==true" @click="showHideSettings">Настройки</my-button>
      <my-button v-else @click="showHideSettings">Закрыть настройки</my-button>
    </div>
    <!-- <transition name="list"> -->
      <div class="settings modal"
        v-if="getStatusesSettings.settings===true">
        <div class="buttons">
            <my-button class="settingsbutton" v-if="getStatusesSettings.login!==true" @click="showHideLogin">Изменить логин</my-button>
              <changelogin v-if="getStatusesSettings.login===true"/>
            <my-button class="settingsbutton" v-if="getStatusesSettings.password!==true" @click="showHidePassword">Изменить пароль</my-button>
              <changepassword v-if="getStatusesSettings.password"/>
            <my-button class="settingsbutton" v-if="getStatusesSettings.forname!==true" @click="showHideForname">Изменить имя</my-button>
              <changeforname v-if="getStatusesSettings.forname===true"/>
            <my-button class="settingsbutton" v-if="getStatusesSettings.lastname!==true" @click="showHideLastname">Изменить фамлию</my-button>
              <changelastname v-if="getStatusesSettings.lastname===true"/>
            <my-button class="settingsbutton" v-if="getStatusesSettings.delete!==true" @click="showHideDelete">Удалить аккаунт</my-button>
              <deleteAccount v-if="getStatusesSettings.delete===true"/>
        </div>
      </div>
    <!-- </transition> -->
    <my-button  @click="toContentPage">На главную</my-button>
    <my-button  @click="exiteAccount">Выйти</my-button>
  </div>

  <div v-else>
    <h1 class="notEnterTitle">Вы не вошли в личный кабинет</h1>
    <div>
      <loginCabinet/>
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
import deleteAccount from '../components/CabinetComponents/deleteAccount.vue'

export default {
  computed: mapGetters(["getUserInformation","getStatusesSettings","getAuthStatus"]),
  methods:{
    ...mapMutations([
    "showHideSettings",
    "exiteAccount",
    "showHideLogin",
    "showHidePassword",
    "showHideForname",
    "showHideLastname",
    "showHideDelete",
    ]),
    // toContentPage(){
    //   console.log("ПИЗДУЕМ К КОНТЕНТУ")
    //   this.$router.push('/content')
    // },
    toUserCabinet(){
      console.log("ПИЗДУЕМ В КАБИНЕТ")
      this.$router.push("/cabinet")
    }
  }, 
  components:{
    changelogin,
    changepassword,
    changeforname,
    changelastname,
    loginCabinet,
    deleteAccount,
  }
}
</script>

<style scoped>
.windowCabinet{
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgb(245, 245, 245);
  width: 60vw;
  margin: 40px auto 40px auto;
  border-radius: 10px;
  justify-items: center;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
-moz-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
}
.notEnterTitle{
  color: #7088a1;
}
.title{
  margin: 0;
}
.modal{
  border-radius: 10px;
  padding: 5px;
  background-color: #171320;
  box-shadow: inset 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
}
.buttons{
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.button{
  /* margin: 5px;
  background-color: white;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  min-width: 160px;
  color: black; */
  /* color: rgb(168, 168, 255); */
}
.settingsbutton{
   color: rgb(168, 168, 255);
}
.delete{
  background-color: rgb(255, 241, 241);
  box-shadow: inset 0px 0px 10px 3px rgba(201, 0, 0, 1);
}
.content{
  font-size: 20px;
  font-weight: bold;
  border:1px solid black;
  padding: 10px;
  border-radius: 10px;
}
/* .list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0s;
  transform: translateX(1000%);
  /* transform: scale(1,0); */

</style>