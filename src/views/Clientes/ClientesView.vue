<script>
import router from "@/router";
export default {
    name: "ClientesView",
    computed: {
        getClientes() {
            return this.$store.getters.getClientes;
        },
    },
    mounted() {
        this.$store.dispatch("fetchClientes");
    },
    methods: {
        verDetalle(id) {
            router.replace(`/clientes/${id}`);
        },
        eliminar(id) {
            this.$store.dispatch("deleteCliente", id);
        },

    },
}

</script>

<template>
    <div>
        <h1>Clientes</h1>

        <div v-if="getClientes.length">
            <router-link to="/clientes/crear"><button class="btn btn-outline-success">Crear nuevo
                    Cliente</button></router-link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ruc</th>
                        <th>Cedula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in getClientes" :key="cliente.id">
                        <td>{{ cliente.nombre }}</td>
                        <td>{{ cliente.ruc }}</td>
                        <td>{{ cliente.cedula }}</td>
                        <td>
                            <button @click="verDetalle(cliente.id)" class="btn btn-info">Ver más</button>
                            <span class="text-secondary m-1"></span>
                            <button @click="eliminar(cliente.id)" class="btn btn-outline-danger">Eliminar</button>
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