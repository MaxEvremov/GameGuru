<template>
  <div class="table">
    <div class="colors" v-for="color in colors"
    :key="color.id"
    :style="MyStyle(color.backgroundColor, color.color)"
    @mouseenter="changeContainerColor(color.backgroundColor)">
    {{color.title}}
    </div>
    <div class="container"
    :style="container">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      colors:[
        {id:1, backgroundColor: "white", title: "белый", color:"black"},
        {id:2, backgroundColor: 'black', title: "черный", color:"white"},
        {id:3, backgroundColor: 'red', title: "красный", color:"blue"},
        {id:4, backgroundColor: 'green', title: "зеленый", color:"yellow"},
        {id:5, backgroundColor: 'blue', title: "синий", color:"red"}
      ],
      container:[]
    }
  },
  methods:{
    MyStyle(background,color){
      return{
        backgroundColor: background,
        color: color
      }
    },
    changeContainerColor(color){
      this.container = {backgroundColor:color}
    }
  }
}
</script>
<style scoped>
.table{
  padding: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 20px;
}
.colors{
  display: grid;
  width: 100px;
  height: 50px;
  align-items: center;
  border:1px solid black;
  grid-column-start: 0;
  grid-column-end: 1;
  border-radius: 10px;
}
.container{
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 6;
  padding: -20px;
  border-radius: 10px;
  transition: background 0.5s ease;
}
</style>