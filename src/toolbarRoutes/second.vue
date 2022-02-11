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
        'Игрулька номер 1',
        'Игрулька номер 2',
        'Игрулька номер 3',
        'Игрулька номер 4',
        'Игрулька номер 5',
        'Игрулька номер 6',
        'Игрулька номер 7',
        'Игрулька номер 8',
        'Игрулька номер 9'
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
  background-color: rgb(246, 253, 180);
}
</style>