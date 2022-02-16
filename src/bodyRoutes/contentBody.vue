<template>
  <div class="content">
    <div class="newPost">
      <p class="button new" @mouseenter="showLogin"
              v-if="!getAuthStatus"
            >Написать новый пост</p>
    </div>
    <div class="newPost modal">
      <input class="title" type="text">
      <input class="body" type="text">
    </div>
    <div class="container" v-for="post in getAllPosts" :key="post.id">
        <h1 class="title">{{post.title}}</h1>
        <div class="body">{{post.body}}</div>
        <div class="bottom">
          <div class="bottom left">
            <div class="author window">
            <p class="author">{{post.author.forname}} {{post.author.lastname}}</p>
          </div>
          <div class="date window">
            <p class="date">{{post.created.slice(0,10)}} {{post.created.slice(11,16)}}</p>
          </div>
          </div>
          <div class="bottom right">
            <p class="button" @mouseenter="showLogin"
              v-if="!getAuthStatus"
            >Перейти к записи</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default({
  mounted () {
    this.getPosts()
  },
  computed: {
    ...mapGetters(['getAllPosts'])
  },
  methods: {
    ...mapActions(['getPosts'])
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400&display=swap');

.user{
  color: aliceblue;
}
.content{
  margin: 10px;;
}
.container{  
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgb(255, 250, 250);
  border-radius: 10px;
  width: 80vw;
  margin: 30px auto 20px auto;
  max-width: 1000px;
  min-width: 400px;
 -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
-moz-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
}
.title{
  font-family: 'Lobster', cursive;
}
.body{
  display: grid;
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  margin: 0 20px 0 20px;
  padding: 5px;
  min-height: 40px;
  align-items: center;
  justify-content: start;
  box-shadow: inset 0 0 10px #000000;
  padding: 10px;
}
.bottom{
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: 15px;
  font-size: 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  align-content: center
}
.button{
  cursor: pointer;
}
.left{
  display: grid;
  grid-template-columns: 40% 60%;
  justify-items: start
}
.new{
  display: grid;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 40px;
  margin: 20px auto;
  align-content: center;
  border-radius: 5px;
  font-family: 'Lobster', cursive;
  font-size: 20px;
  box-shadow: 0px 0px 10px 2px rgb(0 144 255 / 69%);
}

</style>
