import { createStore } from 'vuex'
import { fetchCliente, fetchClientes } from './clientes'
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
    fetchCliente
  },
  mutations: {
    setClientes: (state, clientes) => (state.clientes = clientes),
    setCliente: (state, cliente) => (state.cliente = cliente),
  },
  modules: {
  }
})
