import { UsersAPI } from '../../api/users'

const userAPI = new UsersAPI()

export default {

  state: {
    usersAPI:[],
    auth:false,
    tryEnter:false,
    user:[]
  },
  mutations: {
    exiteAccount(state) {
      state.auth = false
      state.user = []
      state.tryEnter = false
    },
    nulledTryEnter(state) {
      state.tryEnter = false
    },
    pushUsers(state, getUsers) {
      console.log(getUsers)
      state.usersAPI = getUsers
      console.log("PUSH USERS TO USERSAPI STATE")
      console.log(state.usersAPI)
    },
    userEnter(state, user) {
      state.user = user
      state.auth = true
      console.log(state.user)
    }
  },
  getters: {
    getAuthStatus(state){
      return state.auth
    },
    getUserLogin(state){
      let name= {login:state.user.login}
      return (name)
    },
    getUserInformation(state){
      console.log(state.user)
      return (state.user)
    },
    getTryEnter(state){
      return state.tryEnter
    },
    getLoginContemporaneity(state){
        if (state.contemporaneity===true){
          return false
        }else if (state.contemporaneity===false){
          return true
        }else{
          return null
        }
    },
    getUsersAPI(state){ 
      return state.usersAPI
    }
  },
  actions: {
    async usersAPI(ctx){
      let users = await userAPI.getUsers()
      console.log(users)
      console.log("VUEX get usersAPI")

      ctx.commit('pushUsers', users)
    },
    async newUser(state,user){
      console.log(user)
      userAPI.newUser(user)
      // ctx.commit('registration',user)
    },
    async authUser(ctx, user){
      console.log("authenticate, connecting" + user)
      let resUser = await userAPI.authUser(user)
      ctx.commit('userEnter',resUser)
    },


    // async patchUser({commit ,state}, patching){
    //   console.log(Object.keys(patching)[0]) 

      // if (Object.keys(patching)[0]==='login'){

      //   console.log("LOGIN")

      //   const patchUser = {
      //     login:patching.login,
      //     forname:state.user.forname,
      //     lastname:state.user.lastname,
      //     age:state.user.age
      //   }
      //   let resUser = await userAPI.patch(login, patchUser)
      // commit('userEnter',resUser)
      // }else if(Object.keys(patching)[0]==='forname'){

      //   console.log("FORNAME")

      //   const patchUser = {
      //     login:state.user.login,
      //     forname:patching.forname,
      //     lastname:state.user.lastname,
      //     age:state.user.age
      //   }
      //   let resUser = await userAPI.patch(login, patchUser)
      // commit('userEnter',resUser)
      // }else if(Object.keys(patching)[0]==='lastname'){

      //   console.log("LASTNAME")

      //   const patchUser = {
      //     login:state.user.login,
      //     forname:state.user.forname,
      //     lastname:patching.lastname,
      //     age:state.user.age
      //   }
      //   let resUser = await userAPI.patch(login, patchUser)
      // commit('userEnter',resUser)
      // }else if(Object.keys(patching)[0]==='age'){

      //   console.log("AGE")

      //   const patchUser = {
      //     login:state.user.login,
      //     forname:state.user.forname,
      //     lastname:state.user.lastname,
      //     age:patching.age
      //   }
      //   let resUser = await userAPI.patch(login, patchUser)
      // commit('userEnter',resUser)
      // }


    //   let login = state.user.login
    //   console.log(state.user)

    //   // let newlogin = {login:state.user.login}
    //   let resUser = await userAPI.patch(login)
    //   commit('userEnter',resUser)
    // },

    async patch({commit ,state}, patching){
      const login = state.user.login
      let resUser = await userAPI.patch(login, patching)
      console.log(resUser)
      commit('userEnter',resUser)
    },
    async deleteAccount({commit ,state}){
      const login = state.user.login
      userAPI.delete(login)
      commit('exiteAccount')
    }
  }
}