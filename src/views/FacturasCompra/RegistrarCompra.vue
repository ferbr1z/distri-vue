<template>
    <div class="container mt-5">
        <h2 class="mb-4">Crear Nueva Factura</h2>
        <form @submit.prevent="crearFactura">
            <div class="mb-3">
                <label for="numeroFactura" class="form-label">Número de Factura:</label>
                <input v-model="factura.numeroFactura" type="text" class="form-control" id="numeroFactura" required />
            </div>

            <div class="mb-3">
                <label for="proveedor" class="form-label">Proveedor:</label>
                <input v-model="factura.proveedor" type="text" class="form-control" id="proveedor" required />
            </div>

            <div class="mb-3">
                <label for="total" class="form-label">Total:</label>
                <input v-model.number="factura.total" type="number" class="form-control" id="total" required />
            </div>

           <h3>Detalles:</h3>
    <div v-for="(detalle, index) in factura.detalle" :key="index" class="mb-3 row">
      <div class="col-md-3">
        <div class="mb-3">
          <label for="nombreLibro" class="form-label">Nombre del Libro:</label>
          <input v-model="detalle.nombreLibro" type="text" class="form-control" id="nombreLibro" required />
        </div>
      </div>

      <div class="col-md-2">
        <div class="mb-3">
          <label for="cantidad" class="form-label">Cantidad:</label>
          <input v-model.number="detalle.cantidad" type="number" class="form-control" id="cantidad" @input="calcularSubtotal(index)" required />
        </div>
      </div>

      <div class="col-md-2">
        <div class="mb-3">
          <label for="precioUnitario" class="form-label">Precio Unitario:</label>
          <input v-model.number="detalle.precioUnitario" type="number" class="form-control" id="precioUnitario" @input="calcularSubtotal(index)" required />
        </div>
      </div>

      <div class="col-md-2">
        <div class="mb-3">
          <label for="subtotal" class="form-label">Subtotal:</label>
          <input type="text" class="form-control" id="subtotal" :value="formatoMoneda(detalle.subtotal)" readonly />
        </div>
      </div>

 <div class="col-md-3">
    <div class="mt-4">
        <button type="button" @click="agregarDetalle" class="btn btn-primary m-2"><i class="bi bi-plus-lg"></i></button>
        <button type="button" @click="eliminarDetalle(index)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    </div>
    </div>

    </div>



            <button type="submit" class="btn btn-success">Crear Factura</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            factura: {
                numeroFactura: "",
                proveedor: "",
                total: 0,
                detalle: [
                    {
                        nombreLibro: "",
                        cantidad: 0,
                        precioUnitario: 0,
                        subtotal: 0,
                    },
                ],
            },
        };
    },
    methods: {
        agregarDetalle() {
            this.factura.detalle.push({
                nombreLibro: "",
                cantidad: 0,
                precioUnitario: 0,
                subtotal: 0,
            });
        },
        eliminarDetalle(index) {
            this.factura.detalle.splice(index, 1);
        },
        crearFactura() {
            // Lógica para enviar la factura al servidor
            console.log("Factura creada:", this.factura);
        },
        calcularSubtotal(index) {
            const detalle = this.factura.detalle[index];
            detalle.subtotal = detalle.cantidad * detalle.precioUnitario;
        },
        formatoMoneda(valor) {
            // Formatear el valor como moneda
            return valor.toLocaleString('es-ES', { style: 'currency', currency: 'PYG' });
        },
    },
};
</script>
