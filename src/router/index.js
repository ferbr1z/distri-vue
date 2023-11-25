import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/clientes/:pag?',
    name: 'clientes',
    component: () => import("../views/Clientes/ClientesView.vue")
  },
  {
    path: '/clientes/id/:id',
    name: 'cliente',
    component: () => import("../views/Clientes/ClienteView.vue")
  },
  {
    path: '/clientes/crear',
    name: 'crearCliente',
    component: () => import("../views/Clientes/ClienteForm.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router