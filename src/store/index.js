// import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modal'
import auth from './modules/auth'
import settings from './modules/settings'
import blog from './modules/blog'

// Vue.use(Vuex)

export default new Vuex.Store({
  actions:{},
  mutations:{},
  state:{},
  getters:{},


  modules:{
    modal,
    auth,
    settings,
    blog,
  }
})