export default {
  
  state:{
    show:{
      settings:false,
      login:false,
      password:false,
      forname:false,
      lastname:false,
      delete:false,
    }
  },

  actions:{},
  mutations:{
    showHideSettings(state){
      state.show.settings=!(state.show.settings)
    },
    showHideLogin(state){
      state.show.login=!(state.show.login)
    },
    showHidePassword(state){
      state.show.password=!(state.show.password)
    },
    showHideForname(state){
      state.show.forname=!(state.show.forname)
    },
    showHideLastname(state){
      state.show.lastname=!(state.show.lastname)
    },
    showHideDelete(state){
      state.show.delete=!(state.show.delete)
    },
  },
  getters:{
    getStatusesSettings(state){
      return state.show
    }
  }
}