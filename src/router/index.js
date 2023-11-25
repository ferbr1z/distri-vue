import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import("../views/Clientes/ClientesView.vue")
  },
  {
    path: '/cliente/:id',
    name: 'cliente',
    component: () => import("../views/Clientes/ClienteView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router