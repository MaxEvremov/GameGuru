import auth from "./auth"
export default {
  
  state:{
    show:{
      read:false,
      watch:false,
      play:false,
      calender:false,
      login:false,
      registration:false,
      newpost:false,
    }
  },

  actions:{},
  mutations:{
    showRead(state){
      state.show.read = true
      state.show.watch = false
      state.show.login = false
      state.show.play = false
      state.show.calender = false
      state.show.registration = false
      
    },
    showWatch(state){
      state.show.read = false
      state.show.watch = true
      state.show.login = false
      state.show.play = false
      state.show.calender = false
      state.show.registration = false
    },
    showPlay(state){
      state.show.read = false
      state.show.watch = false
      state.show.login = false
      state.show.play = true
      state.show.calender = false
      state.show.registration = false
    },
    showCalender(state){
      state.show.read = false
      state.show.watch = false
      state.show.login = false
      state.show.play = false
      state.show.calender = true
      state.show.registration = false
    },
    showLogin(state){
      state.show.read = false
      state.show.watch = false
      state.show.login = true
      state.show.play = false
      state.show.calender = false
      state.show.registration = false
    },
    showRegistration(state){
      state.show.read = false
      state.show.watch = false
      state.show.login = false
      state.show.play = false
      state.show.calender = false
      state.show.registration = true
    },
    showNewPost(state){
      console.log("a")
      console.log(state.show.newpost)
      state.show.newpost = !state.show.newpost
    },
    closeAll(state){
      state.show.read = false
      state.show.watch = false
      state.show.login = false
      state.show.play = false
      state.show.calender = false
      state.show.registration = false
      console.log("закрыть всё")
      auth.mutations.nulledTryEnter
    }
  },
  getters:{
    getStatuses(state){
      return state.show
    }
  }
}