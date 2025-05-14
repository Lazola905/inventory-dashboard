
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/DashboardView.vue')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/OrdersView.vue')
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: () => import('../views/InventoryView.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/ProductsView.vue')
    },
    {
        path: '/customers',
        name: 'Customers',
        component: () => import('../views/CustomersView.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/SettingsView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router