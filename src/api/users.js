import axios from 'axios'

export class UsersAPI {
  async getUsers(){
    return (
      axios.get('http://127.0.0.1:8001/users')
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

    // const csrftoken = this.getCookie('csrftoken');

    // const config = {
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-CSRFToken': csrftoken,
    //     }
    // }

    const userValues={
      login:user.login,
      password:user.password,
      forname:user.forname,
      lastname:user.lastname,
      age:user.age
    }
    const userValuesJSON = JSON.stringify(userValues)
    axios.post('http://127.0.0.1:8001/users/',
      userValuesJSON
    )
  }
}