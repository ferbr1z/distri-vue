import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/Login/Login.vue"),
    alias: "/",
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
  {
    path: '/autores',
    name: 'autores',
    component: () => import("../views/Autores/AutoresView.vue")
  },
  {
    path: '/autores/:id',
    name: 'autor',
    component: () => import("../views/Autores/AutorView.vue")
  },
  {
    path:'/autores/crear',
    name:'crearAutor',
    component: ()=>import ("../views/Autores/AutorForm.vue")
  },
  {
    path: '/generos',
    name: 'generos',
    component: () => import("../views/Generos/GenerosView.vue")
  },
  {
    path: '/generos/:id',
    name: 'genero',
    component: () => import("../views/Generos/GeneroView.vue")
  },
  {
    path:'/generos/crear',
    name:'crearGenero',
    component: ()=>import ("../views/Generos/GeneroForm.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
