<script setup lang="ts">
import Hooks from './components/hooks/Hooks.vue'
</script>

<template>
  <div>
    <header>
      <!-- Верхняя часть приложения, которая всегда видна -->
      <div>
        <RouterLink to="/hooks" class="navigation mr-2">Hooks</RouterLink>
        <RouterLink to="/router" class="navigation mr-2">Router</RouterLink>
        <RouterLink to="/" class="navigation">Home</RouterLink>
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
</style>
