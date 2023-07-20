<script setup lang="ts">
// import Hooks from './components/hooks/Hooks.vue'
</script>
<!-- vba + tab = создание элементарной структуры -->
<template>
  <div class="wrapper">
    <header :style="{ backgroundColor: 'yellow' }">
      <!-- Верхняя часть приложения, которая всегда видна -->
      <RouterLink to="/" class="navigation mr-2">Home</RouterLink>
      <RouterLink to="/hooks" class="navigation mr-2">Hooks</RouterLink>
      <RouterLink to="/users" class="navigation mr-2">Users</RouterLink>
      <a @click="$router.push('/hooks')" class="router-push navigation mr-2">Router push</a>
      <a @click="$router.push({ name: 'Router' })" class="router-push navigation mr-2"
        >Router push to router</a
      >
    </header>
    <main>
      <!--<RouterView> здесь будет динамически отображать компоненты на основе маршрутов -->
      <router-view />
    </main>
    <footer :style="{ backgroundColor: 'red' }">
      <!-- Нижняя часть приложения, которая всегда видна -->
      <h3>FOOTER</h3>
    </footer>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  height: 1px;
  flex: 1 1 auto;
}
.navigation {
  color: black;
}
.router-push {
  cursor: pointer;
}
</style>
