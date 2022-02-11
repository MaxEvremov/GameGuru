<template>
  <div class="menu">
    <div class="element"
    v-for="post in posts"
    :key="post.id">
    <h3 class="elem">№ {{post.id}}</h3>
    <h3 class="elem">{{post.title}}</h3>
    <h3 class="elem">оценка пользователя: {{post.rate}}</h3>
    <h3 class="elem">Автор:
      {{post.author}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      posts:[
        {id:1,title:'хорошо все',rate:5, author:'Michael'},
        {id:2,title:'хорошо!!',rate:4.5, author:'павло'},
        {id:3,title:'норм',rate:3, author:'Антоха'},
        {id:4,title:'говно',rate:0, author:'гошан'},
        {id:5,title:'можно и лучшке',rate:3, author:'дфйдфц'},
        {id:6,title:'сосать',rate:5, author:'сосать'}
      ]
    }      
  }
}
</script>
<style scoped>
.menu{
  display: grid;
  grid-template-columns: 1fr;
  float: right;
}
.element {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: rgb(255, 214, 160);
}
.elem {
  padding: 10px;
}
</style>