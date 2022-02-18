<template>
  <div class="toolbar">

    <div class="podrazdel_1">
      <div class="menuElements leftside">
        <div class="logo">
          <img class="img" src="https://images.greenmangaming.com/16a482767e0e4dd4a329a1b55cfcdcb8/e059a130ed2848e0a9a772328254f197.jpg" alt="logo">
        </div>
        <my-button @mouseenter="showRead">Читать</my-button>
        <my-button @mouseenter="showWatch">Смотреть</my-button>
        <my-button @mouseenter="showPlay">Играть</my-button>
        <my-button @mouseenter="showCalender">Календарь игр</my-button>
      </div>
    </div>

    <div class="podrazdel_2">
      <div class="UserInfo">
        <h4 class="nameUser"
        v-if="getAuthStatus"
        @click="toUserCabinet"
        >{{getUserInformation.forname}} {{getUserInformation.lastname}}</h4>
      </div>
      <div class="menuElements login">
        <my-button @mouseenter="showLogin" v-if="!getAuthStatus">Войти</my-button>
        <my-button @mouseenter="exiteAccount"  v-else>Выйти</my-button>
        </div>
    </div>
  </div>
  <div class="modalWindow" @mouseleave="closeAll">
    <transition-group name="list">
      <Read class="modal" v-if="getStatuses.read"/>
      <Watch class="modal" v-if="getStatuses.watch"/>
      <Play class="modal" v-if="getStatuses.play"/>
    </transition-group>
  </div>

  <div class="loginModaWindow">
    <transition-group name="login_list">
      <Login class="modal__login" v-if="getStatuses.login"/>
      <Registration class="registration" v-if="getStatuses.registration"/>
      </transition-group>
  </div>

</template>

<script>
import Read from './ModalComponents/read.vue'
import Watch from './ModalComponents/watch.vue'
import Play from './ModalComponents/play.vue'
import Login from './ModalComponents/login.vue'
import Registration from './ModalComponents/registration.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  
  computed: mapGetters(["getStatuses", "getAuthStatus","getUserInformation"]),
  components:{
    Read,
    Watch,
    Play,
    Login,
    Registration
  },
  methods:{
    ...mapMutations([
      "showRead",
      "showWatch",
      "showPlay",
      "showCalender",
      "showLogin",
      "closeAll",
      "exiteAccount"]),
      toUserCabinet(){
        this.$router.push("/cabinet")
      }
  }
}
</script>

.<style scoped>
.modalWindow{
  position: absolute;
  display: grid;
  width: 100%;
  z-index: 900;
}
.loginModaWindow{
  justify-items: end;
  display: grid;
  grid-template-columns: 1fr;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.15);
  box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.15);
}
.menuElements{
  display: grid;
  align-items: center
}
.leftside{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  align-items: center
}
.modal{
  position: absolute;
  width: 100%;
  background-color: white;
}
.modal__login{
  position: absolute;
  background-color: white;
}
.item{
  display: grid;
  padding: 10px;
}
.rightside{
  display: grid;
  margin-right: 10px;
  cursor: pointer;
}
.gridbutton{
  display: grid;
  width: 200px;
  height: 50px;
  background-color: antiquewhite;
}
.toolbar{
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 1px solid rgb(216, 216, 216);
  z-index: 2;
}
.podrazdel_1{
  display: grid;
  background-color: white;
  justify-content: start;
}
.podrazdel_2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  justify-content: end;
  gap: 20px;
}
.logo{
  margin: 4px;
  border-radius: 20px;
  -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
}
.img{
  max-height: 45px;
  border-radius: 12px;
  margin-top: 4px;
}
.title__highlight{
  color: #f04012;
  transition: color 0.7s ease;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0s;
  transform: translateX(-100%);
}
.login_list-enter-active,
.login_list-leave-active {
  transition: all 0.3s ease;
}
.login_list-enter-from,
.login_list-leave-to {
  opacity: 0s;
  transform: translateX(100%);
}
.nameUser{
  cursor: pointer;
}
</style>