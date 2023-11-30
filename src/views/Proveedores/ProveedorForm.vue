<script>
import { validarCampos } from "@/utils/ValidarCampos";

export default {
    name: "ClienteForm",
    data() {
        return {
            nombre: "",
            ruc: "",
            telefono: "",
            direccion: "",
            email: "",
            formIncompleto: false,
        };
    },
    methods: {
        crearProveedor() {
            if (!validarCampos([this.nombre, this.ruc])) {
                alert("Todos los campos con * son obligatorios");
                this.formIncompleto = true;
                return;
            }
            const proveedor = {
                nombre: this.nombre,
                ruc: this.ruc,
                cedula: this.cedula,
                proveedorDetalle: {
                    telefono: this.telefono,
                    direccion: this.direccion,
                    email: this.email,
                },
            };
            this.$store.dispatch("createProveedor", proveedor);
        },
    },
};
</script>

<template>
    <div>
        <form @submit.prevent="crearProveedor" class="row">
            <div class="p-5 col-6">
                <h1>Crear Proveedor</h1>
                <div class="form-group">
                    <label for="nombre">Nombre*</label>
                    <input v-model="nombre" type="text"
                        :class="{ 'form-control': true, 'is-invalid': nombre === '' && formIncompleto }" id="nombre"
                        placeholder="Nombre" required>
                </div>
                <div class="form-group">
                    <label for="ruc">Ruc*</label>
                    <input v-model="ruc" type="text"
                        :class="{ 'form-control': true, 'is-invalid': ruc === '' && formIncompleto }" id="ruc"
                        placeholder="Ruc" required>
                </div>
            </div>
            <div class="p-5 bg-light rounded col-6">
                <h3>Detalle</h3>
                <div class="form-group">
                    <label for="telefono">Telefono</label>
                    <input v-model="telefono" type="text" class="form-control" id="telefono" placeholder="Telefono">
                </div>
                <div class="form-group">
                    <label for="direccion">Direccion</label>
                    <input v-model="direccion" type="text" class="form-control" id="direccion" placeholder="Direccion">
                </div>
                <div class="form-group">
                    <label for="email">Correo</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="Correo">
                </div>
            </div>
        </form>
        <button type="submit" class="btn btn-primary mt-2" @click="crearProveedor"> Guardar </button>
    </div>
</template>
