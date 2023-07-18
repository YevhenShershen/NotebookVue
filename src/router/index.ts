import { createRouter, createWebHistory } from 'vue-router'
import RouterView from '../views/RouterView.vue'
const router = createRouter({
  // history определяет как браузер будет хранить историю наших интерфейсов
  //два параметра: createWebHashHistory(для старых браузеров #)пример https://google.com/#/users/1
  //createWebHistory(для новых браузеров) пример https://google.com/users/1
  //createMemoryHistory(история хранится только в памяти)
  history: createWebHistory(import.meta.env.BASE_URL),
  //параметр routes - это описание url адресов на которые будет наш роутер реагировать
  routes: [
    // {
    //в свойстве 'path' может менятся поэтому лучше всего использовать навигацию через 'name'
    //   path: '/',
    //   name: 'App',
    //   component: () => import('../../src/App.vue')
    // },
    {
      path: '/router',
      name: 'Router',
      //компонент загружается заранее(для маленьких компонентов и проектов)
      component: RouterView
    },
    {
      path: '/hooks',
      name: 'Hooks',
      //В такой способ лучше всего импортировать компоненты так как этот компонент будет загружен в том случаем когда мы перейдем по ссылке(для больших проектов и компонентов)
      component: () => import('../components/hooks/Hooks.vue')
    }
  ]
})

export default router
