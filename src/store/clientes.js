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
