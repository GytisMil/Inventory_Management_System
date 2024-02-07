import { createRouter, createWebHashHistory} from 'vue-router'
import Inventory from '../views/Inventory.vue'

const routes = [
  {
    path: '/',
    name: 'inventory',
    component: Inventory
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router