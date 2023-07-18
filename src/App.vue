<script setup lang="ts">
import Hooks from './components/hooks/Hooks.vue'
</script>

<template>
  <div>
    <header>
      <!-- Верхняя часть приложения, которая всегда видна -->
      <div>
        <RouterLink to="/" class="navigation mr-2">Home</RouterLink>
        <RouterLink to="/hooks" class="navigation mr-2">Hooks</RouterLink>
        <RouterLink to="/router" class="navigation mr-2">Router</RouterLink>
        <a @click="$router.push('/hooks')" class="router-push navigation mr-2">Router push</a>
        <a @click="$router.push({ name: 'Router' })" class="router-push navigation mr-2"
          >Router push to router</a
        >
      </div>
    </header>
    <main>
      <h1>APP</h1>
      <!--<RouterView> здесь будет динамически отображать компоненты на основе маршрутов -->
      <router-view />
    </main>
    <footer>
      <!-- Нижняя часть приложения, которая всегда видна -->
    </footer>
  </div>
</template>
<style scoped lang="scss">
.navigation {
  color: black;
}
.router-push {
  cursor: pointer;
}
</style>
