import { BlogAPI } from '../../api/blog'

const blogAPI = new BlogAPI()


export default {
  state:{
    posts:[]
  },
  mutations: {
    pushPosts(state, req) {
      console.log(req)
      state.posts = req
      console.log("PUSH POSTS TO STATE")
    },
  },
  actions: {
    async getPosts(ctx){
      let posts = await blogAPI.getPosts()
      console.log(posts)
      console.log("VUEX get usersAPI")
      ctx.commit('pushPosts', posts)
    },
    async patchPost({commit ,state}, patching){
      const login = state.user.login
      let resUser = await blogAPI.patch(login, patching)
      console.log(resUser)
      commit('userEnter',resUser)
    },
    async deleteAccount({commit ,state}){
      const login = state.user.login
      blogAPI.delete(login)
      commit('exiteAccount')
    }
  },
  getters: {
    getAllPosts(state){
      return state.posts
    }
  }
}