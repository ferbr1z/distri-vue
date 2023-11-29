<template>
  <div>
    <h1>Autores</h1>

    <div class="search-bar input-group mb-3 w-100">
      <input v-model="searchQuery" class="form-control" placeholder="Buscar autores...">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="searchAutores">Buscar</button>
      </div>
    </div>

    <router-link to="/autores/crear">
      <button class="btn btn-outline-success">Crear nuevo Autor</button>
    </router-link>

    <div v-if="getAutores && getAutores.autores && getAutores.autores.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in getAutores.autores" :key="autor.id">
            <td>{{ autor.nombre }}</td>
            <td>{{ autor.activo }}</td>
            <td>
              <button @click="verDetalle(autor.id)" class="btn btn-info">Ver más</button>
              <button @click="deleteAutor(autor.id)" class="btn btn-outline-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Navegación de paginación -->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Anterior</button>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <button class="page-link" @click="changePage(page)">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Siguiente</button>
          </li>
        </ul>
      </nav>
    </div>

    <div v-else>
      <p>No hay autores en esta página</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "AutoresView",
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
    };
  },
  computed: {
    getAutores() {
      return this.$store.getters.getAutores;
    },
    totalPages() {
      return this.getAutores ? this.getAutores.totalPages : 0;
    },
  },
  mounted() {
    this.$store.dispatch("fetchAutores", this.currentPage);
  },
  methods: {
    verDetalle(id) {
      router.replace(`/autores/${id}`);
    },
    async deleteAutor(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este autor?")) {
    await this.$store.dispatch("deleteAutor", id);
    await this.$store.dispatch("fetchAutores", this.currentPage);
  }
},
    async searchAutores() {
      try {
        if (this.searchQuery.trim() === "") {
          await this.$store.dispatch("fetchAutores", this.currentPage);
        } else {
          await this.$store.dispatch("searchAutores", { query: this.searchQuery, page: this.currentPage });
        }
      } catch (error) {
        console.error("Error searching autores:", error);
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.searchAutores();
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
