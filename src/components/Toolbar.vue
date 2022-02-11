<template>
  <div class="toolbar">
    <div
     @mouseenter ="gotofirst"
     >
    <h3>Наши книги</h3>
    </div>
    <div
     @mouseenter ="gotosecond"
     >
    <h3>Наши игры</h3>
    </div>
    <div
     @mouseenter ="gotothird"
     >
    <h3>Наши вещи</h3>
    </div>
    <div
     @mouseenter ="gotofourth"
     >
    <h3>Мнения от нас</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gotofirst(){
      this.$router.push('/first')
    },
     gotosecond(){
      this.$router.push('/second')
    },
    gotothird(){
      this.$router.push('/third')
    },
    gotofourth(){
      this.$router.push('/fourth')
    },
    mouseleaveFunc(){
      this.$router.push('/')
    }
  }
}
</script>

.<style scoped>
.gridbutton{
  display: grid;
  width: 200px;
  height: 50px;
  background-color: antiquewhite;
}
.toolbar{
  margin-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: antiquewhite;
}
</style>