import { UsersAPI } from '../../api/users'

const userAPI = new UsersAPI()

export default {

  state: {
    users:[
      {login:"admin123", password:"admin", forname:"Maxim", lastname:"Evremov"},
      {login:"user123", password:"user", forname:"User", lastname:"Unnamed"},
      {login:"Max123", password:"ujujkmujujkm17KT", forname:"Максим", lastname:"Багаев"}
    ],
    usersAPI:[],
    auth:false,
    tryEnter:false,
    contemporaneity:null,
    user:[]
  },
  mutations: {
    exiteAccount(state){
      state.auth = false
      state.user = []
      state.tryEnter = false
      console.log("выход из личного кабинета "+state.auth)
    },
    nulledTryEnter(state){
      state.tryEnter=false
    },
    changeLogin(state, newLogin){
      console.log("LOGIN CHANGE")
      for(let i=0 ;i<state.users.length;i++){
        if (state.users[i].login === state.user.login){
          state.users[i].login = newLogin
          console.log("LOGIN HAS BEN CHANGED")
        }
      }
    },
    changePassword(state, newPassword){
      console.log("PASSWORD CHANGE")
      for(let i=0 ;i<state.users.length;i++){
        if (state.users[i].login === state.user.login){
          state.users[i].password = newPassword
          console.log("PASSWORD HAS BEN CHANGED")
        }
      }
    },
    changeForname(state, UserForname){
      console.log("FORNAME CHANGE")
      for(let i=0 ;i<state.users.length;i++){
        if (state.users[i].login === state.user.login){
          state.users[i].forname = UserForname
          console.log("FORNAME HAS BEN CHANGED")
        }
      }
    },
    changeLastname(state, UserLastname){
      console.log("FORNAME CHANGE")
      for(let i=0 ;i<state.users.length;i++){
        if (state.users[i].login === state.user.login){
          state.users[i].lastname = UserLastname
          console.log("FORNAME HAS BEN CHANGED")
        }
      }
    },
    registration(state, newUser){
      state.users.unshift({
        login:newUser.login,
        password:newUser.password,
        forname:newUser.forname,
        lastname: newUser.lastname,
        age:newUser.age
      })
    },
    deleteUser(state,findLogin){
      state.users[findLogin]
    },
    verification(state, findUser){
      for (let i = 0; i < state.users.length&&state.auth===false; i++){
        if (state.users[i].login === findUser.login){
          console.log("логин найден "+ state.users[i].login)
              if (state.users[i].password === findUser.password){
                console.log("пароль найден "+ state.users[i].password)
                state.auth = true
                state.user = state.users[i]
                console.log("верификация пройдена "+state.auth)
                console.log("Вы вошли, как "+state.user.forname+" "+state.user.lastname)

              }else{
                state.tryEnter = true
              }
        }else{
          state.tryEnter = true
        }
      }
    },
    findLogin(state,login){
      console.log("ищем"+state.users.length)
      state.contemporaneity=null
      for(let i=0 ;i<state.users.length&&state.contemporaneity!==true;i++){
        console.log(state.users[i])
        if (state.users[i].login === login){
          state.contemporaneity = true
        }else{
          state.contemporaneity = false
        }
      }
    },
    nullContemporaneity(state){
      state.contemporaneity=null
    },
    pushUsers(state, getUsers){ 
      console.log(getUsers)
      state.usersAPI = getUsers
      console.log("PUSH USERS TO USERSAPI STATE")
      console.log(state.usersAPI)
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
      let name= {forname:state.user.forname, lastname:state.user.lastname}
      return (name)
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
    async newUser(ctx, user){
      console.log("VUEX newuser = "+user)
      userAPI.newUser(user)
      ctx.commit('registration',user)
    }
  }
}