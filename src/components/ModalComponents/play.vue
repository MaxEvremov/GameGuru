<template>
  <div class="container">

    <div class="leftSide">

      <div class="platformsWin">
        <h2>Платформы</h2>
        <div class="platforms">
          <div class="item" v-for="platform in platforms"
          :key="platform">{{platform}}</div>
        </div>
      </div>

      <div class="genresWin">
        <h2>Жанры</h2>
        <div class="genres">
          <div class="item" v-for="genre in genres"
          :key="genre">{{genre}}</div>
        </div>
      </div>
      <div class="compilationsWin">
      <h2>Подборки</h2>
      <div class="compilations">
        <div class="item" v-for="compilation in compilations"
        :key="compilation">{{compilation}}</div>
      </div>
      </div>
    </div>

    <div class="rightSide">
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
      platforms:[
        "PC",
        "PS5",
        "Xbox Series X",
        "PS4",
        "Xbox One",
        "Nintendo Switch"
      ],
      genres:[
        "Стелс",
        "Ремейк",
        "Экшен",
        "Шутер",
        "RPG",
        "Стратегия"
      ],
      compilations:[
        "Игры с хорошим сюжетом",
        "Кооперативные игры",
        "Игры для слабых PC",
        "Игры для средних PC",
        "Игры с открытым миром",
        "Игры про выживание"
      ]
    }
  }
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 35% 65%;
  min-width: 1050px;
  gap: 30px;
  height: 300px;
  justify-items: start
}
.leftSide{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.itemsContainer{
  display: grid;
  min-width: 350px;
  grid-template-rows: 20% 80%;
}
.itemsTitle{
  height: 40px;
}
.itewsWindow{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(6,1fr);
}
.item{
  width: auto;
  height: 38px;
}
.image{
height: 200px;
padding: 10px;
border-radius: 40px;
}
.platforms{
  display: grid;
  grid-template-rows: repeat(6,1fr);
  align-items: start
}
.genres{
  display: grid;
  grid-template-rows: repeat(6,1fr);
  align-items: start
}
.compilations{
  font-size: 14px;
  display: grid;
  grid-template-rows: repeat(6,1fr);
  align-items: start
}
</style>