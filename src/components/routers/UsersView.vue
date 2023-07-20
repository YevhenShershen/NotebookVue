<script setup>
import { useRouter } from 'vue-router'
const users = ['Adam', 'Jackson', 'Aigan']
const router = useRouter()
//и потом это функцию можем вешать на наши элементы
function handleClick() {
  console.log(router)
  router.push({ name: 'User', params: { id: 5 } })
}
</script>
<template>
  <h2>Users navigation</h2>
  <div class="d-flex flex-column">
    <a
      v-for="(user, userId) in users"
      :key="userId"
      @click="$router.push({ name: 'User', params: { id: userId } })"
      >{{ user }}</a
    >
    <v-btn @click="handleClick">Show router in console</v-btn>
  </div>
</template>
