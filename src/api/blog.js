import axios from 'axios'

export class BlogAPI {
  async getPosts(){
    return (
      axios.get('http://127.0.0.1:8002/posts/')
    .then(function(response){
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
    )
  }
  async newPost(post){
    const values={
      title:post.title,
      slug:post.slug,
      author:post.author,
      body:post.body,
      created:post.creted
    }
    const posts = JSON.stringify(values)
    axios.post('http://127.0.0.1:8001/users/',
      posts
    )
  }
  async patch(id,value){
    return(
      axios.post(`http://127.0.0.1:8002/post/patch/${id}/`,
    JSON.stringify(value)
    )
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    )
  }
  async delete(id){
    return(
      axios.delete(`http://127.0.0.1:8001/post/patch/${id}/`)
    )
  }
}


