<script>
import { mapState } from "vuex";
export default {
    name: "GeneroView",
    computed: {
        ...mapState(["genero"]),
        getCliente() {
            return this.$store.getters.getGenero;
        },
    },
    mounted() {
        const generoId = this.$route.params.id;
        this.$store.dispatch("fetchGenero", generoId);
    },
methods: {
        volverGeneros(){
            this.$router.push("/generos")
        }
    },
}
</script>

<template>
        <button type="submit" class="btn btn-secondary mt-2" @click="volverGeneros"> Volver </button>

    <div v-if="genero" class="row p-3">
        <div class="col">
            <h1>Genero</h1>

            <ul class="list-group list-group-flush ">
                <li class="list-group-item"><b>Genero:</b> {{ genero.genero }}</li>
                <li class="list-group-item"><b>Activo:</b> {{ genero.activo }}</li>
            </ul>

        </div>
    </div>

    <div v-else>
        <center>
            <h1 class="text-secondary">Este genero no existe o ha sido eliminado</h1>
        </center>
    </div>
</template>