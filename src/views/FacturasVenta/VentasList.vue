<template>
    <div>
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Fecha de venta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(factura, index) in ventas" :key="index">
                    <td>{{ factura.cliente }}</td>
                    <td>{{ factura.fechaVenta }}</td>
                    <td>
                        <button class="btn btn-primary" @click="verDetalles(factura)">Detalles</button>
                        <button class="btn btn-danger mx-2" @click="borrarVenta(factura.id)">Eliminar</button>
                        
                    </td>
                </tr>
            </tbody>
            
        </table>
         <!-- Mostrar detalles de la factura seleccionada -->
        <div v-if="detalles">
          <h2>Detalles de la Factura</h2>
          <p>Productos: {{ detalles.producto }}</p>
          <p>Subtotal: {{ detalles.subtotal }}</p>
          <p>Iva: {{ detalles.iva }}</p>
          <p>Total: {{ detalles.total }}</p>

          <h3>Detalles de los Libros</h3>
          <table class="table table-stripped">
            <thead>
              <tr>
                <th>Nombre del Libro</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(detalle, index) in detalles.detalle" :key="index">
                <td>{{ detalle.nombreLibro }}</td>
                <td>{{ detalle.cantidad }}</td>
                <td>{{ detalle.precioUnitario }}</td>
                <td>{{ detalle.subtotal }}</td>
                
              </tr>
            </tbody>
          </table>

          <!-- Botón para cerrar los detalles -->
          <button class="btn btn-secondary" @click="cerrarDetalles">Cerrar Detalles</button>
        </div>

        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" @click="cambiarPagina(currentPage - 1)">Atrás</a>
                </li>
                <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber">
                    <a class="page-link" @click="cambiarPagina(pageNumber)">{{ pageNumber }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" @click="cambiarPagina(currentPage + 1)">Siguiente</a>
                </li>
            </ul>
        </nav>
    </div>
    <router-link to="/registrar-venta" class="btn btn-primary">Agregar Venta</router-link>
</template>

<script>

import {apiVentas} from '@/api/Api'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            ventas: [],
            currentPage: 1,
            totalPages: 3, // Debes actualizar esto con el número real de páginas
            detalles: null,
        };
    },
    watch: {
        currentPage(newPage) {
            this.getData(newPage);
        },
    },
    mounted() {
        this.getData(this.currentPage);
    },
    methods: {
        getData() {

            apiVentas.get(`/ventas`)
                .then(response => {
                    this.ventas = response.data;
                    console.log(response.data);
                });
        },
            verDetalles(ventas) {
            // Establecer la factura seleccionada para mostrar detalles
            this.detalles = ventas;
        },
        cerrarDetalles() {
            // Limpiar los detalles cuando se cierra
            this.detalles = null;
        },
        cambiarPagina(newPage) {
            if (newPage > 0 && newPage <= this.totalPages) {
                this.currentPage = newPage;
            }
        },


        borrarVenta(id){
            Swal.fire({
                title: "Quieres eliminar la venta?",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: `Cancelar`
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Venta Eliminada");
                     // Realizar una solicitud DELETE al backend
                    console.log(id)
                    apiVentas.delete(`/ventas/${id}`)
                    .then(() => {
                    console.log("Venta eliminada:", id);
                    // Actualizar la lista de ventas después de la eliminación
                    this.getData(this.currentPage);
        })
                } else if (result.isDenied) {
                    Swal.fire("No se elimino la venta");
                }
                });
        
        },
    },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>