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
            router.replace(`/cliente/${id}`);
        }
    },
}

</script>

<template>
    <div>
        <h1>Clientes</h1>
        {{ console.log(getClientes) }}

        <div v-if="getClientes.length">
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
                            <button @click="deleteCliente(cliente.id)" class="btn btn-outline-danger">Eliminar</button>
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