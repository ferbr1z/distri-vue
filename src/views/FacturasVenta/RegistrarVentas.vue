<template>
    <div>
      <h2>Registrar Venta</h2>
  
      <!-- Formulario para registrar una nueva venta -->
      <form @submit.prevent="registrarVenta">
        <div class="form-group">
          <label for="clienteId">Cliente:</label>
          <input type="text" v-model.number="nuevaVenta.clienteId" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="fechaVenta">Fecha de Venta:</label>
          <input type="date" v-model="nuevaVenta.fechaVenta" class="form-control" required />
        </div>
  
        <!-- Detalles de los libros -->
        <h3>Detalles de los Libros</h3>
        <div v-for="(detalle, index) in nuevaVenta.detalles" :key="index">
          <div class="form-group">
            <label for="producto">Nombre del Libro:</label>
            <input type="text" v-model="detalle.producto" class="form-control" required />
          </div>
  
          <div class="form-group">
            <label for="subtotal">Subtotal:</label>
            <input type="number" v-model="detalle.subtotal" class="form-control" required />
          </div>
  
          <div class="form-group">
            <label for="iva">IVA:</label>
            <input type="number" v-model="detalle.iva" class="form-control" required />
          </div>
  
          <div class="form-group">
            <label for="total">Total:</label>
            <input type="number" v-model="detalle.total" class="form-control" required />
          </div>
        </div>
  
        <button type="button" class="btn btn-primary" @click="agregarDetalle">Agregar Libro</button>
  
        <button type="submit" class="btn btn-success">Registrar Venta</button>
      </form>
    </div>
  </template>
  
  <script>
  import {apiVentas} from '@/api/Api'
  import Swal from 'sweetalert2'
  
  export default {
    data() {
      return {
        nuevaVenta: {
          clienteId: 0,
          fechaVenta: "",
          detalles: [
            // Puedes predefinir un detalle si lo necesitas
            {
              producto: "",
              subtotal: 0,
              iva: 0,
              total: 0
            }
          ]
        }
      };
    },
    methods: {
      agregarDetalle() {
        this.nuevaVenta.detalles.push({
          producto: "",
          subtotal: 0,
          iva: 0,
          total: 0
        });
      },
      registrarVenta() {
        // Enviar la solicitud al backend
        
          
            Swal.fire({
                title: "Desea guardar esta venta?",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Guardar",
                denyButtonText: `No Guardar`
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    apiVentas.post("/ventas", this.nuevaVenta)
                    Swal.fire("Saved!", "", "success");
                    console.log("Venta registrada:");
                    this.$router.push("/");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
                });
          
      }
    }
    
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
  