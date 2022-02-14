import axios from 'axios'

export class UsersAPI {
  async getUsers(){
    return (
      axios.get('http://127.0.0.1:8001/api/users')
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
    )
  }
   
  async newUser(){

    // const csrftoken = this.getCookie('csrftoken');

    // const config = {
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-CSRFToken': csrftoken,
    //     }
    // }

    // console.log(user)
    // console.log(JSON.stringify(user))

    axios.post('http://127.0.0.1:8001/users/',{
        "login": "66666669",
        "password": "66666669",
        "forname": "66666669",
        "lastname": "666666669",
        "age": 69
    })
  }
}