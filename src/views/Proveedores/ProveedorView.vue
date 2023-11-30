<script>
import { mapState } from "vuex";
export default {
    name: "ProveedorView",
    computed: {
        ...mapState(["proveedor"]),
        getCliente() {
            return this.$store.getters.getProveedor;
        },
    },
    mounted() {
        const proveedorId = this.$route.params.id;
        this.$store.dispatch("fetchProveedor", proveedorId);
    }
}
</script>

<template>
    <div v-if="proveedor" class="row p-3">
        <div class="col">
            <h1>Proveedor</h1>

            <ul class="list-group list-group-flush ">
                <li class="list-group-item"><b>Nombre:</b> {{ proveedor.nombre }}</li>
                <li class="list-group-item"><b>Ruc:</b> {{ proveedor.ruc }}</li>
                <li class="list-group-item"><b>Cedula:</b> {{ proveedor.cedula }}</li>
            </ul>

        </div>

        <div class="col">
            <h2>Detalle</h2>

            <ul class="list-group list-group-flush" v-if="proveedor.proveedorDetalle" :key="proveedor.proveedorDetalle.id">
                <li class="list-group-item"><b>Telefono:</b> {{ proveedor.proveedorDetalle.telefono }}</li>
                <li class="list-group-item"><b>Direccion:</b> {{ proveedor.proveedorDetalle.direccion }}</li>
                <li class="list-group-item"><b>Correo:</b> {{ proveedor.proveedorDetalle.email }}</li>
            </ul>
        </div>

    </div>

    <div v-else>
        <center>
            <h1 class="text-secondary">Este proveedor no existe o ha sido eliminado</h1>
        </center>
    </div>
</template>