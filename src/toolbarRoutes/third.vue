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
        'Вещь номер 1',
        'Вещь номер 2',
        'Вещь номер 3',
        'Вещь номер 4',
        'Вещь номер 5',
        'Вещь номер 6',
        'Вещь номер 7',
        'Вещь номер 8',
        'Вещь номер 9'
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
  background-color: rgb(175, 252, 255);
}
</style>