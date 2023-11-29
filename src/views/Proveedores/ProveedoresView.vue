<script>
import router from "@/router";
export default {
    name: "ProveedoresView",
    computed: {
        getProveedores() {
            return this.$store.getters.getProveedores;
        },
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
    },
}

</script>

<template>
    <div>
        <h1>Proveedores</h1>
        <router-link to="/proveedores/crear"><button class="btn btn-outline-success">Crear nuevo
                Proveedor</button></router-link>
        <div v-if="getProveedores.length">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ruc</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="proveedor in getProveedores" :key="proveedor.id">
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

        </div>
        <div v-else>
            <p>No hay clientes</p>
        </div>
    </div>
</template>