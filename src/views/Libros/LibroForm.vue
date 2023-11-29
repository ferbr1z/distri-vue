<script>
import { validarCampos } from "@/utils/ValidarCampos";

export default {
    name: "ClienteForm",
    data() {
        return {
            titulo: "",
            cantidad: 0,
            precio: 0,
            sinopsis: "",
            iva: 0,
            autorId: 0,
            generosId:[],
            formIncompleto: false,
        };
    },
    methods: {
        crearLibro() {
            if (!validarCampos([this.titulo, this.cantidad, this.precio,this.sinopsis,this.iva,this.autorId,this.generosId])) {
                alert("Todos los campos son obligatorios");
                this.formIncompleto = true;
                return;
            }
            const libro = {
                titulo: this.titulo,
                cantidad: this.cantidad,
                precio: this.precio,
                sinopsis: this.sinopsis,
                iva: this.iva,
                autorId: this.autorId,
                generoId:this.generosId,
                
                clienteDetalle: {
                    telefono: this.telefono,
                    direccion: this.direccion,
                    email: this.email,
                },
            };
            this.$store.dispatch("createCliente", cliente);
        },
    },
};
</script>

<template>
    <div>
        <form @submit.prevent="crearCliente" class="row">
            <div class="p-5 col-6">
                <h1>Crear Cliente</h1>
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
                <div class="form-group">
                    <label for="cedula">Cedula*</label>
                    <input v-model="cedula" type="text"
                        :class="{ 'form-control': true, 'is-invalid': cedula === '' && formIncompleto }" id="cedula"
                        placeholder="Cedula" required>
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
        <button type="submit" class="btn btn-primary mt-2" @click="crearCliente"> Guardar </button>
    </div>
</template>
