export default {
  
  state:{
    show:{
      login:false,
      password:false,
      forname:false,
      lastname:false,
    }
  },

  actions:{},
  mutations:{
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
  },
  getters:{
    getStatusesSettings(state){
      return state.show
    }
  }
}