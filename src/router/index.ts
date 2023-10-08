import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Главная',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Все аниме',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Расписание',
    path: '/Calendar',
    component: () => import('@/views/Calendar.vue')
  },
  {
    name: 'Рандом',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Топ 100',
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }