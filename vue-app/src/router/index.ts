import { createRouter, createWebHistory } from 'vue-router'
import ShoppingListView from '../views/ShoppingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component: ShoppingListView
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/shoppingList'
    }
  ]
})

export default router
