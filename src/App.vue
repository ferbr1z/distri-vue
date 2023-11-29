<script setup>
</script>

<template>
  <div class="container-sm">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="nav-item m-3"> <router-link class="nav-link" to="/home">Home</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/about">About</router-link></div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/clientes">Clientes</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/proveedores">Proveedores</router-link> </div>
      <div class="nav-item m-3"> <router-link class="nav-link" to="/productos">Productos</router-link> </div>
      <div class="nav-item"> <router-link class="nav-link" to="/facturas">Facturas</router-link></div>
    </nav>
  </div>
  <div class="container-sm p-4">
    <RouterView />
  </div>
</template>
