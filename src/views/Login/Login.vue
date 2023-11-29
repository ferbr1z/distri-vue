<!-- eslint-disable vue/multi-word-component-names -->


<template>
       <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <h2 class="mb-4">Login</h2>
            <form @submit.prevent="login" class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico:</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Contraseña:</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
              </div>

              <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
       async login() {
            try {
                const response = await axios.post('http://localhost:9090/api/auth/login', {
                    email: this.email,
                    password: this.password,
                });

                // Maneja la respuesta del servidor
                console.log(response.data);

                // Guarda el token en el sessionStorage
                sessionStorage.setItem('token', response.data.token);

                this.$store.dispatch("login", response.data.token);

                // Limpia los campos de los inputs después del inicio de sesión
                this.email = '';
                this.password = '';

            } catch (error) {
                // Maneja los errores de la solicitud
                console.error('Error en la solicitud:', error);
            }
        },
    },
};
</script>

<style scoped>
/* Component-specific styles, if needed */
</style>
