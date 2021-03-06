import axios from 'axios'

export class UsersAPI {

  async getUsers(){
    return (
      axios.get('http://127.0.0.1:8000/users')
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
    )
  }
   
  async newUser(user){
    const userValues={
      login:user.login,
      password:user.password,
      forname:user.forname,
      lastname:user.lastname,
      age:user.age
    }
    const userValuesJSON = JSON.stringify(userValues)
    axios.post('http://127.0.0.1:8000/users/',
      userValuesJSON
    )
  }

  async authUser(authUser){
    const user = JSON.stringify(authUser)
    console.log("API "+user)
    return(
      axios.post('http://127.0.0.1:8000/auth/',
      user
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    )
  }



  // async patch(login){

  //   const patch = {
  //     login:'Anton',
  //     password:'123456',
  //     forname:'Anton',
  //     lastname:'Vasikov',
  //     age:26
  //   }

  //   axios.put(`http://127.0.0.1:8001/users/${login}/`,
  //   JSON.stringify(patch)
  //   )
  //   .then(function (response) {
  //     console.log(response.data)
  //     return response.data
  //   })
  // }



  async patch(login,value){
    return(
      axios.post(`http://127.0.0.1:8000/patch/${login}/`,
    JSON.stringify(value)
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    )
  }

  async delete(login){
    return(
      axios.delete(`http://127.0.0.1:8001/patch/${login}/`)
    )
  }
  
}