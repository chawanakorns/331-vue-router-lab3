import { createRouter, createWebHistory } from 'vue-router'
import PassengerView from '../views/PassengerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-view',
      component: PassengerView
    }
  ]
})

export default router
