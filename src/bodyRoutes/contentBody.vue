<template>
  <div>
    тут будет общее окно контента путь /content ->
    <button
    @click="usersAPI"
    >Получить контент</button>
  </div>
  <div class="content">
    <div class="users"
    v-for="user in getUsersAPI"
    :key="user.login"
    >
    <h2 class="user">Login: {{user.login}} Password:{{user.password}},{{user.forname}} {{user.lastname}},{{user.age}}</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default({
  computed: {
    ...mapGetters(['getUsersAPI'])
  },
  methods: {
    ...mapActions(['usersAPI'])
  }
})
</script>
<style scoped>
.user{
  color: aliceblue;
}
</style>
