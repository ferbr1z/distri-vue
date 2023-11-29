<script>
import { validarCampos } from "@/utils/ValidarCampos";

export default {
    name: "AutorForm",
    data() {
        return {
            nombre: "",
            activo:true,
            formIncompleto: false,
        };
    },
    methods: {
        crearAutor() {
            if (!validarCampos([this.nombre])) {
                alert("Todos los campos son obligatorios");
                this.formIncompleto = true;
                return;
            }
            const autor = {
                nombre: this.nombre,
                activo:true,
            };
            this.$store.dispatch("createAutor", autor);
        },
        volverAutores(){
            this.$router.push("/autores")
        }
    },
};
</script>

<template>
    <div>
                <button type="submit" class="btn btn-secondary mt-2" @click="volverAutores"> Volver </button>
        <form @submit.prevent="crearAutor" class="row">
            <div class="p-5 col-6">
                <h1>Crear Autor</h1>
                <div class="form-group">
                    <label for="nombre">Nombre*</label>
                    <input v-model="nombre" type="text"
                        :class="{ 'form-control': true, 'is-invalid': nombre === '' && formIncompleto }" id="nombre"
                        placeholder="Nombre" required>
                </div>
            </div>
        </form>
        <button type="submit" class="btn btn-primary mt-2" @click="crearAutor"> Guardar </button>
    </div>
</template>
