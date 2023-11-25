import { api } from "@/api/Api";

export async function fetchClientes({ commit }) {
  try {
    const { data } = await api.get("/clientes/pages/1");
    commit("setClientes", data.clientes);
  } catch (error) {
    console.error("Error fetching clientes:", error);
  }
}

export async function fetchCliente({ commit }, id) {
  try {
    const { data } = await api.get(`/clientes/${id}`);
    console.log(data);
    commit("setCliente", data);
  } catch (error) {
    console.error("Error fetching cliente:", error);
  }
}

export async function createCliente({ commit }, cliente) {
  try {
    const { data } = await api.post("/clientes", cliente);
    if(cliente.detalle) {
      cliente.detalle.clienteId = data.id;
      createClienteDetalle(cliente.detalle);
    }
    commit("addCliente", data);
  } catch (error) {
    console.error("Error creating cliente:", error);
  }
}

export async function createClienteDetalle(detalle) {
  try {
    await api.post("/clientes-detalles", detalle);
  } catch (error) {
    console.error("Error creating cliente:", error);
  }
}

export async function updateCliente({ commit }, cliente) {
  try {
    const { data } = await api.put(`/clientes/${cliente.id}`, cliente);
    commit("updateCliente", data);
  } catch (error) {
    console.error("Error updating cliente:", error);
  }
}

export async function deleteCliente({ commit }, id) {
  try {
    await api.delete(`/clientes/${id}`);
    commit("removeCliente", id);
  } catch (error) {
    console.error("Error deleting cliente:", error);
  }
}

