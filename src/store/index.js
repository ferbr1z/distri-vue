import { createStore } from "vuex";
import {
  fetchCliente,
  fetchClientes,
  createCliente,
  deleteCliente,
} from "./clientes";

import {
  fetchProveedor,
  fetchProveedores,
  createProveedor,
  deleteProveedor,
} from "./proveedores";

export default createStore({
  state: {
    clientes: [],
    cliente: null,
    proveedores: [],
    proveedor: null,
  },
  getters: {
    getClientes: (state) => state.clientes,
    getProveedores: (state) => state.proveedores,
  },
  actions: {
    fetchClientes,
    fetchCliente,
    deleteCliente,
    createCliente,
    fetchProveedor,
    fetchProveedores,
    createProveedor,
    deleteProveedor,
  },
  mutations: {
    setClientes: (state, clientes) => (state.clientes = clientes),
    setCliente: (state, cliente) => (state.cliente = cliente),
    addCliente: (state, cliente) => state.clientes.push(cliente),
    removeCliente: (state, id) => {
      state.clientes = state.clientes.filter((cliente) => cliente.id !== id);
    },
    setProveedores: (state, proveedores) => (state.proveedores = proveedores),
    setProveedor: (state, proveedor) => (state.proveedor = proveedor),
    addProveedor: (state, proveedor) => state.proveedores.push(proveedor),
    removeProveedor: (state, id) => {
      state.proveedores = state.proveedores.filter(
        (proveedor) => proveedor.id !== id
      );
    },
  },
  modules: {},
});
