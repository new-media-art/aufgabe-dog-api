import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteDogs from '../components/FavoriteDogs.vue'
import OneBreed from '../components/OneBreed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoriteDogs
  },
  {
    path: '/oneBreed',
    name: 'oneBreed',
    component: OneBreed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
