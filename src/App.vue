<script setup>


</script>

<template>
  <div class="container-sm">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="nav-item m-3"> <router-link class="nav-link" to="/home">Home</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/about">About</router-link></div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/clientes">Clientes</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/proveedores">Proveedores</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/autores">Autores</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/generos">Generos</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/libros">Libros</router-link> </div>
      <div class="nav-item"> <router-link class="nav-link" to="/facturas">Facturas</router-link></div>
      <div class="dropdown">
      <button class="btn btn-white dropdown-toggle m-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Compras
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/registrar/compra">Registrar compra</a></li>
        <li><a class="dropdown-item" href="/compras/page/0">Listar compras</a></li>
      </ul>
  </div>
    </nav>
  </div>
  <div class="container-sm p-4">
    <RouterView />
  </div>
</template>

<script>
export default {
  name:"App",
  mounted() {
    const token = this.$store.state.token;
    this.$store.dispatch("login", token);
  }
}
</script>