<script setup>
import { computed, ref } from 'vue'
import ParentComponent from '../components/routers/ParentComponent.vue'
</script>
<template>
  <div class="w-100 h-100 text-center">
    <h2>ROUTER COMPONENT</h2>
    <parent-component/>
  </div>
</template>
<!-- View значит что компонент что то отоброжает -->

<!-- Так примерно выглядит упрощенный прототип VUE router
const url = computed({
  get({
    return window.location.href
  }),
  set(){
    window.history.pushState({},'',value)
  }
}) -->
