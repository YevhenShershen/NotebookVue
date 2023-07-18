<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
const x = ref(0)
const data = ref('')
const root = ref()
//запрос данных мы производим до того как компонент вмонтирован в ДОМ дерево
//(имитация запроса данных на сервер)
setTimeout(() => {
  data.value = 'New data'
}, 2000)
function updateX(e) {
  x.value = e.pageX
  console.log(x.value)
}
//onBeforeMount компонента еще нету на нашей HTML страничке
//в нем можем привязываться к глобальным событиям
onBeforeMount(() => {
  window.addEventListener('mousemove', updateX)
})

//onMounted монтирует компонент
onMounted(() => {
  console.log('I am onMounted')
  root.value.style.backgroundColor = 'red'
})

//onBeforeUpdate запускается каждый раз когда изменяется у нас внешний вид компонента
onBeforeUpdate(() => {
  console.log('Update Component')
})

//onUpdated запускается после того как в DOM дерево уже внесены изменения
onUpdated(() => {
  console.log('Updated')
})

//onBeforeUnmounted данный хук запускается перед тем как компонент будет удален
//в нем мы можем одписываться от событий
onBeforeUnmount(() => {
  // window.removeEventListener('mousemove', updateX)
  console.log('Unmounted Component')
})

//onUnmounted хук запускается после того как компонент удален
//в нем мы можем одписываться от событий
onUnmounted(() => {
  window.removeEventListener('mousemove', updateX)
  console.log('Unmounted')
})

//Если мы вещаем ref на элемент в компоненте и нам надо произвести какие то
//манипцлации, то мы должны их произвести только тогда когда он отобразится на странице
//Это можно производить в таких компонентах как :onMounted,onUpdated,onBeforeUpdate,onBeforeUnmount
//потому что нашего компонента в других хуках либо еще нету в ДОМ дереве либу уже нету


</script>

<template>
  <div class="w-100 d-flex flex-column align-center">
    <h2 ref="root">COMPONENT A</h2>
    <p>DATA: {{ data }}</p>
    <p>X: {{ x }}</p>
  </div>
</template>
