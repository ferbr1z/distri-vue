import { apiStock } from "@/api/Api";

export async function fetchAutores({ commit },page) {
  try {
    const { data } = await apiStock.get(`/api/autores/page/${page}`);
    commit("setAutores", data);
  } catch (error) {
    console.error("Error fetching autores:", error);
  }
}

export async function fetchAutor({ commit }, id) {
  try {
    const { data } = await apiStock.get(`/api/autores/${id}`);
    console.log(data);
    commit("setAutor", data);
  } catch (error) {
    console.error("Error fetching autor:", error);
  }
}
export async function createAutor({ commit }, autor) {
  try {
    const { data } = await apiStock.post("/api/autores", autor);
    console.log(data);
    commit("addAutor", data);
  } catch (error) {
    console.error("Error creating autor:", error);
  }
}
export async function updateAutor({ commit }, autor) {
  try {
    const { data } = await apiStock.put(`/api/autores/${autor.id}`, autor);
    commit("updateAutor", data);
  } catch (error) {
    console.error("Error updating autor:", error);
  }
}

export async function deleteAutor({ commit }, id) {
  try {
    await apiStock.delete(`/api/autores/${id}`);
    commit("removeAutor", id);
  } catch (error) {
    console.error("Error deleting autor:", error);
  }
}
export async function searchAutores({ commit }, { query, page }) {
    try {
        const { data } = await apiStock.get(`/api/autores/search/${query}/page/${page}`);
  
        // Asegurarse de que la respuesta tenga la estructura esperada
        commit("setAutores", data);
      } catch (error) {
        console.error("Error searching autores:", error);
        throw error; // Lanza la excepción para que el código que llama pueda manejarla si es necesario
      }
  }
  