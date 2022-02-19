<template>
  <div class="content">
    <!-- <div class="newpostbuttoncontainer">
      <my-button class="button newpost" v-if="getStatuses.newpost!==true" @click="showNewPost">Написать новый пост</my-button>
    </div> -->
    <!-- <div class="window" v-if="getStatuses.newpost===true">
      <my-input class="input newpostTitle" placeholder="Название публикации"></my-input>
      <textarea class="input newpostBody" placeholder="Текст публикации" id="" cols="30" rows="20"></textarea>
      <div class="buttonbar">
        <my-button>Опубликовать</my-button>
        <my-button @click="showNewPost">Отмена</my-button>
      </div>
    </div> -->
    <!-- <my-button @click="consolePosts()">выписать посты</my-button> -->
    <div class="white-bg">
      <div class="bestOfTheWeek">
        <div :class="setPosts(index)" v-for="(post, index) in getAllPosts.reverse()" :key="post.id" >
          <div class="image" @click="getToPage">
              <div class="elements">
                <p class="titleofpost" title>{{post.title}}</p>
            </div>
            <img class="image" :src="getUrl(post.image)">
          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";


export default({
  data () {
    return {
      posts:this.getAllPosts
    }
  },
  mounted () {
    this.getPosts()
  },
  computed: {
    ...mapGetters(['getAllPosts','getStatuses'])
  },
  methods: {
    ...mapActions(['getPosts']),
    ...mapMutations(['showNewPost']),
   setPosts(index){
     console.log(index)
     if (index<1){
       return "image first"
     }else{
       return "image other"
     }
   },
   getUrl(url){
     let complete = "http://127.0.0.1:8000"+url
     return complete
   },
   getToPage(){
     this.$router.push("/know-By-Heart")
   }
  },
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Yanone+Kaffeesatz&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400&display=swap');

.elements{
  display: grid;
  position: absolute;
  margin-left: 30px;
  height: 380px;
  width: 320px;
  font-size: 20px;
  z-index: 200;
  pointer-events: none;
  text-shadow: 2px 2px 10px #17222c;
  align-items: end
}
.posttitle{
  /* position: absolute; */
}
.titleofpost{
  color: aliceblue;
  font-family: 'Lobster', cursive;
  font-size: 28px;
}
.dateofthepost{
  margin: 40px;
  color: aliceblue;
}
.bodyofthepost{
  margin: 40px auto;
  color: aliceblue;
}
.user{
  color: aliceblue;
}
.content{
  margin-top: 100px;
}
.bestOfTheWeek{
  margin: auto;
  width: 1200px;
  /* height: 700px; */
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr);
  background-color: white;
  border-radius: 20px;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
.post{  
  display: grid;
  background-color: white;
  height: 300px;
  box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
}
.first{
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
}
.other{
  display: grid;
}
.title{
  font-family: 'Lobster', cursive;
}
.image{
  object-fit: cover;
  height: 100%;
  /* height: 300px; */
  border-radius: 20px;
  display: inline-block;
  overflow: hidden;
}
.image img {
  transition: 1s; /* Время эффекта */
  display: block; /* Убираем небольшой отступ снизу */
  z-index: 1;
}
.image img:hover {
  transform: scale(1.2); /* Увеличиваем масштаб */
  z-index: 1;
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
.newpostbuttoncontainer{
  display: grid;
  justify-items: center;
}
.newpost{
  display: grid;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 40px;
  align-content: center;
  border-radius: 5px;
  font-family: 'Lobster', cursive;
  font-size: 25px;
  box-shadow: 0px 0px 10px 2px rgb(0 144 255 / 69%);
}
.newpostTitle{
  width: 400px;
  height: 40px;
  font-size: 20px;
}
.newpostBody{
  min-width: 500px;
  min-height: 200px;
  width: 80vw;
  max-width: 800px;
  max-height: 400px;
  border-radius: 5px;
}
.window{
  background-color: white;
  display: grid;
  width: 800px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
  -moz-box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
  box-shadow: 0px 0px 20px 3px rgba(0, 144, 255, 0.69);
}
.buttonbar{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
</style>
