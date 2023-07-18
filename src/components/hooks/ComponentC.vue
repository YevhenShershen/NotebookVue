<script setup>
import { ref } from 'vue'
const num = ref(0)
</script>
<template>
  <div>
    <h2>ComponentC</h2>
    <p>{{ num }}</p>
    <v-btn @click="num++">num++</v-btn>
  </div>
</template>
