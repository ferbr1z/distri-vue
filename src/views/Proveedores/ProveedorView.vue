<script>
import { mapState } from "vuex";
export default {
    name: "ProveedorView",
    computed: {
        ...mapState(["proveedor"]),
        getCliente() {
            return this.$store.getters.getCliente;
        },
    },
    mounted() {
        const clientId = this.$route.params.id;
        this.$store.dispatch("fetchProveedor", clientId);
    }
}
</script>

<template>
    <div v-if="proveedor" class="row p-3">
        <div class="col">
            <h1>Proveedor</h1>

            <ul class="list-group list-group-flush ">
                <li class="list-group-item"><b>Nombre:</b> {{ cliente.nombre }}</li>
                <li class="list-group-item"><b>Ruc:</b> {{ cliente.ruc }}</li>
                <li class="list-group-item"><b>Cedula:</b> {{ cliente.cedula }}</li>
            </ul>

        </div>

        <div class="col">
            <h2>Detalle</h2>

            <ul class="list-group list-group-flush" v-if="cliente.clienteDetalle" :key="cliente.clienteDetalle.id">
                <li class="list-group-item"><b>Telefono:</b> {{ cliente.clienteDetalle.telefono }}</li>
                <li class="list-group-item"><b>Direccion:</b> {{ cliente.clienteDetalle.direccion }}</li>
                <li class="list-group-item"><b>Correo:</b> {{ cliente.clienteDetalle.email }}</li>
            </ul>
        </div>

    </div>

    <div v-else>
        <center>
            <h1 class="text-secondary">Este cliente no existe o ha sido eliminado</h1>
        </center>
    </div>
</template>