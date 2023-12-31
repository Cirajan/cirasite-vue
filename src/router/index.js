import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import TV from '../views/TV'
import Books from '../views/Books'
import Pics from '../views/Pics'
import Tracks from '../views/Tracks'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/TV',
    name: 'TV',
    component: TV,
  },
  {
    path: '/Books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/Pics',
    name: 'Pics',
    component: Pics,
  },
  {
    path: '/Tracks',
    name: 'Tracks',
    component: Tracks,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router