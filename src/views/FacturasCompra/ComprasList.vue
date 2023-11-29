<template>
    <div>
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Número de factura</th>
                    <th>Proveedor</th>
                    <th>Fecha de compra</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(factura, index) in facturas" :key="index">
                    <td>{{ factura.numeroFactura }}</td>
                    <td>{{ factura.proveedor }}</td>
                    <td>{{ factura.fechaCompra }}</td>
                    <td>{{ factura.total }}</td>
                    <td>
                        <button class="btn btn-primary" @click="verDetalles(factura)">Detalles</button>
                        <button class="btn btn-danger mx-2">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
         <!-- Mostrar detalles de la factura seleccionada -->
        <div v-if="detalleFactura">
          <h2>Detalles de la Factura</h2>
          <p>Número de Factura: {{ detalleFactura.numeroFactura }}</p>
          <p>Proveedor: {{ detalleFactura.proveedor }}</p>
          <p>Fecha de Compra: {{ detalleFactura.fechaCompra }}</p>
          <p>Total: {{ detalleFactura.total }}</p>

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
              <tr v-for="(detalle, index) in detalleFactura.detalle" :key="index">
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
</template>

<script>
import { apiCompras } from '@/api/Api';

export default {
    data() {
        return {
            facturas: [],
            currentPage: 1,
            totalPages: 3, // Debes actualizar esto con el número real de páginas
             detalleFactura: null,
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
        getData(page=0) {

            apiCompras.get(`/api/compras/page/${page}`)
                .then(response => {
                    this.facturas = response.data;
                    console.log(response.data);
                });
        },
            verDetalles(factura) {
            // Establecer la factura seleccionada para mostrar detalles
            this.detalleFactura = factura;
        },
        cerrarDetalles() {
            // Limpiar los detalles cuando se cierra
            this.detalleFactura = null;
        },
        cambiarPagina(newPage) {
            if (newPage > 0 && newPage <= this.totalPages) {
                this.currentPage = newPage;
            }
        },
        borrarCompra(id){
            console.log("compra borrada",id)
        },
    },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
