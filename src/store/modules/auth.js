export default {

  state: {
    users:[
      {login:"admin123", password:"admin", forname:"Maxim", lastname:"Evremov"},
      {login:"user123", password:"user", forname:"User", lastname:"Unnamed"},
      {login:"Max123", password:"ujujkmujujkm17KT", forname:"Максим", lastname:"Багаев"}
    ],
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
      console.log(state.user)
      for(let i=0 ;i<state.users.length;i++){
        if (state.users[i].login === state.user.login){
          state.users[i].login = newLogin
          console.log("change login")
        }
      }
    },
    changePassword(state, findUser, newPassword){
      state.users.forEach(user => {
        if (user.login === findUser) {
          user.password = newPassword
        }
      })
    },
    registration(state, newUser){
      state.users.unshift({
        login:newUser.login,
        password:newUser.password,
        forname:newUser.forname,
        lastname: newUser.lastname
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
    }
  }
}