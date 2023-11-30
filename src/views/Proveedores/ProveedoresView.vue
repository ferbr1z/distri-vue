<script>
import router from "@/router";
export default {
    name: "ProveedoresView",
    data() {
        return {
            searchOpt: 'nombre', // Selecciona la primera opción por defecto
            searchQuery: "",
            currentPage: 1,
        };
    },
    computed: {
        getProveedores() {
            return this.$store.getters.getProveedores;
        },
        totalPages() {
            return this.getProveedores ? this.getProveedores.totalPages : 0;
        }
    },
    mounted() {
        const pag = this.$route.params.pag || 1;
        this.$store.dispatch("fetchProveedores", pag);
    },
    methods: {
        verDetalle(id) {
            router.replace(`/proveedores/id/${id}`);
        },
        eliminar(id) {
            this.$store.dispatch("deleteProveedor", id);
        },
        async search() {
            if (this.searchQuery.trim() === "") {
                await this.$store.dispatch("fetchProveedores", this.currentPage);
                return;
            }
            const pag = this.currentPage;
            switch (this.searchOpt) {

                case 'nombre':
                    await this.$store.dispatch("searchProveedoresByNombre", { query: this.searchQuery, pag });

                    break;
                case 'ruc':
                    await this.$store.dispatch("searchProveedoresByRuc", { query: this.searchQuery, pag });

                    break;
            }
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.search();
            }
        },
    },
}

</script>

<template>
    <div>
        <h1>Proveedores</h1>

        <div class="d-flex">
            <label class="me-3">Buscar por:</label>
            <label class="me-3">
                <input type="radio" v-model="searchOpt" value="nombre" name="grupoOpciones" class="form-check-input" />
                Nombre
            </label>

            <label class="me-3">
                <input type="radio" v-model="searchOpt" value="ruc" name="grupoOpciones" class="form-check-input" />
                Ruc
            </label>
        </div>
        <div class="search-bar input-group mb-3 w-100">
            <input v-model="searchQuery" class="form-control" placeholder="Buscar autores...">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="search">Buscar</button>
            </div>
        </div>

        <router-link to="/proveedores/crear"><button class="btn btn-outline-success">Crear nuevo
                Proveedor</button></router-link>
        <div v-if="getProveedores && getProveedores.proveedores && getProveedores.proveedores.length">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ruc</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="proveedor in getProveedores.proveedores" :key="proveedor.id">
                        <td>{{ proveedor.nombre }}</td>
                        <td>{{ proveedor.ruc }}</td>
                        <td>
                            <button @click="verDetalle(proveedor.id)" class="btn btn-info">Ver más</button>
                            <span class="text-secondary m-1"></span>
                            <button @click="eliminar(proveedor.id)" class="btn btn-outline-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <button class="page-link" @click="changePage(currentPage - 1)"
                            :disabled="currentPage === 1">Anterior</button>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                        <button class="page-link" @click="changePage(page)">{{ page }}</button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <button class="page-link" @click="changePage(currentPage + 1)"
                            :disabled="currentPage === totalPages">Siguiente</button>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-else>
            <p>No hay clientes</p>
        </div>
    </div>
</template>