<template>
  <div class="menu">
    <div class="element"
    v-for="title in titles"
    :key="title">
    {{title}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      titles:[
        'Книга номер 1',
        'Книга номер 2',
        'Книга номер 3',
        'Книга номер 4',
        'Книга номер 5',
        'Книга номер 6',
        'Книга номер 7',
        'Книга номер 8',
        'Книга номер 9'
      ]
    }      
  }
}
</script>
<style scoped>
.menu{
  width: 65vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.element {
  display: grid;
  width: 220px;
  height: 40px;
  background-color: rgb(255, 214, 160);
}
</style>