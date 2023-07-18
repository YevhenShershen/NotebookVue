<script setup>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import ComponentC from './ComponentC.vue'
import { ref, shallowRef } from 'vue'
const component = shallowRef()
const showComponent = ref(false)
</script>
<template>
  <div class="mb-10">
    <div>
      <div>
        <input type="radio" name="component" v-model="component" :value="ComponentB" />
        <label for="html">ComponentB</label>
      </div>
      <div>
        <input type="radio" name="component" v-model="component" :value="ComponentC" />
        <label for="html">ComponentC</label>
      </div>
      <div class="w-100 d-flex flex-column align-center">
        <!-- <keep-alive> - это специальный компонент во Vue.js, который используется для кэширования
    и управления состоянием дочерних компонентов. Он позволяет сохранять состояние компонента
    и его состояние при его монтировании и размонтировании внутри компонента <keep-alive>.

    Когда компонент обернут в <keep-alive>, он не будет размонтирован при его скрытии
    с экрана или при переходе на другую страницу. Вместо этого, компонент будет закэширован,
    и его состояние будет сохранено. Когда компонент снова становится видимым, Vue.js просто восстановит
    его состояние из кэша, вместо того чтобы создавать новый экземпляр компонента. -->
        <keep-alive>
          <Component :is="component" />
        </keep-alive>
        <!-- без KeppAlive наша переменная 'num' (в компонентах ComponentB и ComponentC) бы сбрасывалась на 0 при переходе между компонентами -->
        <!-- для взаимодействия с компонентами в keep-alive используем два хука onActivated и onDeactivated -->
      </div>
    </div>
  </div>
  <div>
    <v-btn @click="showComponent = !showComponent">{{
      !showComponent ? 'Show component' : 'Unmounted component'
    }}</v-btn>

    <component-a v-if="showComponent" />
  </div>
</template>