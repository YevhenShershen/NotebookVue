<script setup>
import { ref, onUnmounted, onActivated, onDeactivated } from 'vue'
const num = ref(0)
onUnmounted(() => {
  console.log('Я Демонтирован (НЕТ)')
})
//Компонент не удаляется с дом дерева при переходе radion button кнопок
//и что бы с ним как то взаимодействовать мы испольуем определенные хуки:
//onActivated и onDeactivated
onActivated(() => {
  console.log('Im activated')
})
onDeactivated(() => {
  console.log('Im deactivated')
})
</script>
<template>
  <div>
    <h2>ComponentB</h2>
    <p>{{ num }}</p>
    <v-btn @click="num++">num++</v-btn>
  </div>
</template>
