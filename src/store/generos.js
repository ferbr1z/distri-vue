import { apiStock } from "@/api/Api";

export async function fetchGeneros({ commit }) {
  try {
    const { data } = await apiStock.get(`/api/generos/page/0`);
    commit("setGeneros", data);
  } catch (error) {
    console.error("Error fetching generos:", error);
  }
}

export async function fetchGenero({ commit }, id) {
  try {
    const { data } = await apiStock.get(`/api/generos/${id}`);
    console.log(data);
    commit("setGenero", data);
  } catch (error) {
    console.error("Error fetching genero:", error);
  }
}
export async function createGenero({ commit }, genero) {
  try {
    const { data } = await apiStock.post("/api/generos", genero);
    console.log(data);
    commit("addGenero", data);
  } catch (error) {
    console.error("Error creating genero:", error);
  }
}
export async function updateGenero({ commit }, genero) {
  try {
    const { data } = await apiStock.put(`/api/generos/${genero.id}`, genero);
    commit("updateGenero", data);
  } catch (error) {
    console.error("Error updating genero:", error);
  }
}

export async function deleteGenero({ commit }, id) {
  try {
    await apiStock.delete(`/api/generos/${id}`);
    commit("removeGenero", id);
  } catch (error) {
    console.error("Error deleting genero:", error);
  }
}
export async function searchGeneros({ commit }, { query, page }) {
  try {
    const { data } = await apiStock.get(`/api/generos/search/${query}/page/${page}`);
    commit("setGeneros", data);
  } catch (error) {
    console.error("Error searching generos:", error);
  }
}
