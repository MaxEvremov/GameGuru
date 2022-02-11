<template>
  <div class="windowCabinet">
    <div>
      <h4>{{getUserInformation.forname}}</h4>
      <h4>{{getUserInformation.lastname}}</h4>
      </div>
    <div>
      <h5>Настройки</h5>
    </div>
    <div class="settings">
      <div class="buttons">
      <button class="button"
      @click="exiteAccount"
      >Выйти</button>
      <button class="button"
      @click="closeAndNulledTry"
      >На главную</button>
      </div>
      <div>
        <button class="button"
      @click="closeAndNulledTry"
      >Изменить логин</button>

      <changelogin/>

      <button class="button"
      @click="closeAndNulledTry"
      >Изменить пароль</button>

      <changepassword/>

      <button class="button"
      @click="closeAndNulledTry"
      >Изменить имя</button>

      <changeforname/>

      <button class="button"
      @click="closeAndNulledTry"
      >Изменить фамлию</button>

      <changelastname/>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import changelogin from '../components/CabinetComponents/changeLogin.vue'
import changepassword from '../components/CabinetComponents/changePassword.vue'
import changeforname from '../components/CabinetComponents/changeForname.vue'
import changelastname from '../components/CabinetComponents/changeLastname.vue'

export default {
  computed: mapGetters(["getUserInformation","getAuthStatus"]),
  methods: mapMutations(["exiteAccount"]),
  components:{
    changelogin,
    changepassword,
    changeforname,
    changelastname
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
</style>