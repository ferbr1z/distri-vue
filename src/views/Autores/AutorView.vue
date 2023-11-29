<template>
  <div v-if="autor || isEditing" class="row p-3">
    <button type="button" class="btn btn-secondary mt-2" @click="volverAutores"> Volver </button>

    <div class="col">
      <h1>Autor</h1>

      <form @submit.prevent="saveChanges">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Nombre:</b>
            <span v-if="isEditing">
              <input v-model="updatedAutor.nombre" class="form-control" />
            </span>
            <span v-else>{{ autor.nombre }}</span>
          </li>
          <li class="list-group-item">
            <b>Activo:</b>
            <span v-if="isEditing">
              <input v-model="updatedAutor.activo" type="checkbox" class="form-check-input" />
            </span>
            <span v-else>{{ autor.activo }}</span>
          </li>
        </ul>

        <div v-if="isEditing">
          <button type="submit" class="btn btn-primary">Guardar cambios</button>
        </div>
        <div v-else>
          <button @click="toggleEdit" class="btn btn-warning">Editar</button>
        </div>
      </form>

      <!-- Alerta de confirmación -->
      <div v-if="showConfirmation" class="alert alert-success alert-dismissible fade show mt-3 text-center" role="alert">
        <strong>¡Éxito!</strong> Autor modificado correctamente.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="hideConfirmation">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>

  <div v-else>
    <center>
      <h1 class="text-secondary">Este autor no existe o ha sido eliminado</h1>
    </center>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AutorView",
  data() {
    return {
      isEditing: false,
      updatedAutor: {},
      showConfirmation: false,
    };
  },
  computed: {
    ...mapState(["autor"]),
  },
  methods: {
    ...mapActions(["updateAutor"]),
    toggleEdit() {
      this.isEditing = !this.isEditing;

      // Clonar el objeto autor para realizar cambios locales
      this.updatedAutor = { ...this.autor };
    },
    async saveChanges() {
      // Realizar la actualización (PUT) utilizando la acción del store
      await this.updateAutor(this.updatedAutor);

      // Desactivar el modo de edición después de la actualización
      this.isEditing = false;

      // Mostrar la alerta de confirmación
      this.showConfirmation = true;
    },
    hideConfirmation() {
      // Ocultar la alerta de confirmación y redirigir
      this.showConfirmation = false;
      this.$router.push("/autores");
    },
    volverAutores() {
      this.$router.push("/autores");
    },
  },
  mounted() {
    const autorId = this.$route.params.id;
    this.$store.dispatch("fetchAutor", autorId);
  },
};
</script>
