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
    //в свойстве 'path' может менятся поэтому лучше всего использовать навигацию через 'name'
    {
      path: '/',
      name: 'Router',
      //компонент загружается заранее(для маленьких компонентов и проектов)
      component: () => import('../views/RouterView.vue'),
      children: [
        {
          path: '',
          name: 'Children1',
          component: () => import('../components/routers/ChildrenComponent1.vue')
        },
        {
          path: 'child2',
          name: 'Children2',
          component: () => import('../components/routers/ChildrenComponent2.vue')
        }
      ]
    },
    {
      path: '/hooks',
      name: 'Hooks',
      //В такой способ лучше всего импортировать компоненты так как этот компонент будет загружен в том случаем когда мы перейдем по ссылке(для больших проектов и компонентов)
      component: () => import('../components/hooks/Hooks.vue')
    },
    {
      path: '/users',
      name: 'Users',
      //В такой способ лучше всего импортировать компоненты так как этот компонент будет загружен в том случаем когда мы перейдем по ссылке(для больших проектов и компонентов)
      component: () => import('../components/routers/UsersView.vue')
    },
    {
      //(\\d+) только цифры
      path: '/:id(\\d+)',
      name: 'User',
      //В такой способ лучше всего импортировать компоненты так как этот компонент будет загружен в том случаем когда мы перейдем по ссылке(для больших проектов и компонентов)
      component: () => import('../components/routers/User.vue')
    }
  ]
})

export default router
