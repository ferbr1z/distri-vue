import { createStore } from 'vuex'
import { fetchCliente, fetchClientes, createCliente, deleteCliente } from './clientes'
export default createStore({
  state: {
    clientes: [],
    cliente: null,
  },
  getters: {
    getClientes: (state) => state.clientes,
  },
  actions: {
    fetchClientes,
    fetchCliente,
    deleteCliente,
    createCliente
  },
  mutations: {
    setClientes: (state, clientes) => (state.clientes = clientes),
    setCliente: (state, cliente) => (state.cliente = cliente),
    addCliente: (state, cliente) => state.clientes.push(cliente),
    removeCliente: (state, id) => {
      state.clientes = state.clientes.filter((cliente) => cliente.id !== id);
    },
  },
  modules: {
  }
})
