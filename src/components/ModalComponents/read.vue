<template>
  <div class="container">

    <div class="leftside">
      <div class="itemsContainer">
      <h2 class="itemsTitle">Читать</h2>
        <div class="itewsWindow">
          <div class="item"
            v-for="item in items"
            :key="item"
            @mouseenter="highlightItemFunc"
            @mouseleave="deleteHighlight"
          
        
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="rightside">
      <div class="picturesContainer">
      <h2>Игры недели</h2>
      <div class="imagesWindow">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
      "Новости",
      "Лонгриды",
      "Обзоры и превью",
      "Топы и дайджесты",
      "Интервью",
      "Репортажи",
      "Анонсы",
      "Слухи",
      "Модификации",
      "Скандалы",
      "Графика",
      "Релизы",
      "Лучшее за неделю",
      "Лучшее за месяц",
      "Лучшее за все время"
      ],
      HighlightItem:{color:"red"}
    }
  },
  methods:{
    highlightItemFunc(){
      this.HighlightItem = {color: "#f04012"}
      console.log(this.HighlightItem)
    },
    deleteHighlight(){
      this.HighlightItem = {}
      console.log(this.HighlightItem)
    }
  }
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-width: 1050px;
  align-items: start;
  height: 300px;
  gap: 30px;
  justify-items: start
}
.itemsContainer{
  display: grid;
  min-width: 350px;
  grid-template-rows: 20% 80%;
}
.itemsTitle{
  height: 90px;
}
.itewsWindow{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(6,1fr);
}
.item{
  height: 29px;
}
.image{
height: 200px;
padding: 10px;
border-radius: 30px;
}
.Item{
  color: red;
}
</style>