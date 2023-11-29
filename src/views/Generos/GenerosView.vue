<script>
import router from "@/router";

export default {
  name: "GenerosView",
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    getGeneros() {
      return this.$store.getters.getGeneros;
    },
  },
  mounted() {
    this.$store.dispatch("fetchGeneros");
  },
  methods: {
    verDetalle(id) {
      router.replace(`/generos/${id}`);
    },
    async deleteGenero(id) {
      if (confirm("¿Estás seguro de que quieres eliminar este genero?")) {
        await this.$store.dispatch("deleteGenero", id);
      }
    },
    async searchGeneros() {
      if (this.searchQuery.trim() === "") {
        await this.$store.dispatch("fetchGeneros");
      } else {
        await this.$store.dispatch("searchGeneros", { query: this.searchQuery, page: 0 });
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 15px;
}
</style>

<template>
  <div>
    <h1>Generos</h1>

    <div class="search-bar input-group mb-3 w-100">
      <input v-model="searchQuery" @input="searchGeneros" class="form-control" placeholder="Buscar generos...">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Buscar</button>
      </div>
    </div>
    <router-link to="/generos/crear">
        <button class="btn btn-outline-success">Crear nuevo Genero</button>
      </router-link>
    <div v-if="getGeneros.length">
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Genero</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="genero in getGeneros" :key="genero.id">
            <td>{{ genero.genero }}</td>
            <td>{{ genero.activo }}</td>
            <td>
              <button @click="verDetalle(genero.id)" class="btn btn-info">Ver más</button>
              <button @click="deleteGenero(genero.id)" class="btn btn-outline-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No hay generos</p>
    </div>
  </div>
</template>
