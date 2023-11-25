import { api } from "@/api/Api";

export async function fetchClientes({ commit }, pag) {
  try {
    const { data } = await api.get(`/clientes/pages/${pag}`);
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
    console.log(data);
    if (cliente.clienteDetalle) {
      cliente.clienteDetalle.clienteId = data.id;
      createClienteDetalle(cliente.clienteDetalle);
    }
    commit("addCliente", data);
  } catch (error) {
    console.error("Error creating cliente:", error);
  }
}

/** Para crear un Detalle */
export async function createClienteDetalle(detalle) {
  try {
    console.log(detalle);
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
    await api.delete(`/clientes/id/${id}`);
    commit("removeCliente", id);
  } catch (error) {
    console.error("Error deleting cliente:", error);
  }
}
