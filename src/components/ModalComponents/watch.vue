<template>
  <div class="container">
    <div class="itemsContainer">
      <h2 class="itemsTitle">Смотреть</h2>
      <div class="itewsWindow">
        <div class="item" v-for="item in items"
      :key="item">{{item}}</div>
      </div>
      </div>
    <div class="picturesContainer">
      <h2>Игры недели</h2>
      <div class="imagesWindow">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/ru/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg" alt="The Witcher 3: Wild Hunt">
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
      "Тизеры",
      "Модификации",
      "Графика",
      "Релизы",
      "Лучшее за неделю",
      "Лучшее за месяц",
      "Лучшее за все время"
      ]
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
</style>