<script>
import { validarCampos } from "@/utils/ValidarCampos";

export default {
    name: "GeneroForm",
    data() {
        return {
            genero: "",
            activo:true,
            formIncompleto: false,
        };
    },
    methods: {
        crearGenero() {
            if (!validarCampos([this.genero])) {
                alert("Todos los campos son obligatorios");
                this.formIncompleto = true;
                return;
            }
            const genero = {
                genero: this.genero,
                activo:true,
            };
            this.$store.dispatch("createGenero", genero);
        },
        volverGeneros(){
            this.$router.push("/generos")
        }
    },
};
</script>

<template>
    <div>
        <button type="submit" class="btn btn-secondary mt-2" @click="volverGeneros"> Volver </button>
        <form @submit.prevent="crearGenero" class="row">
            <div class="p-5 col-6">
                <h1>Crear Genero</h1>
                <div class="form-group">
                    <label for="genero">Genero*</label>
                    <input v-model="genero" type="text"
                        :class="{ 'form-control': true, 'is-invalid': genero === '' && formIncompleto }" id="genero"
                        placeholder="Genero" required>
                </div>
            </div>
        </form>
        <button type="submit" class="btn btn-primary mt-2" @click="crearGenero"> Guardar </button>
    </div>
</template>
