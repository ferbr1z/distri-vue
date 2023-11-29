import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/clientes/:pag?",
    name: "clientes",
    component: () => import("../views/Clientes/ClientesView.vue"),
  },
  {
    path: "/clientes/id/:id",
    name: "cliente",
    component: () => import("../views/Clientes/ClienteView.vue"),
  },
  {
    path: '/clientes/crear',
    name: 'crearCliente',
    component: () => import("../views/Clientes/ClienteForm.vue")
  },
  {
    path: "/proveedores/:pag?",
    name: "proveedores",
    component: () => import("../views/Proveedores/ProveedoresView.vue"),
  },
  {
    path: "/proveedores/id/:id",
    name: "proveedor",
    component: () => import("../views/Proveedores/ProveedorView.vue"),
  },
  {
    path: '/proveedor/crear',
    name: 'crearProveedor',
    component: () => import("../views/Proveedores/ProveedorForm.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
