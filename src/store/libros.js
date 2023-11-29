import { api } from "@/api/Api";

export async function fetchLibros({ commit }, ) {
  try {
    const { data } = await api.get(`/libros/pages/0`);
    commit("setLibros", data.libros);
  } catch (error) {
    console.error("Error fetching libros:", error);
  }
}

export async function fetchLibro({ commit }, id) {
  try {
    const { data } = await api.get(`/libros/${id}`);
    console.log(data);
    commit("setLibro", data);
  } catch (error) {
    console.error("Error fetching libro:", error);
  }
}

export async function createLibro({ commit }, libro) {
  try {
    const { data } = await api.post("/libros", libro);
    console.log(data);
    if (libro.libroDetalle) {
      libro.libroDetalle.libroId = data.id;
      createLibroDetalle(libro.libroDetalle);
    }
    commit("addLibro", data);
  } catch (error) {
    console.error("Error creating libro:", error);
  }
}

/** Para crear un Detalle */
export async function createLibroDetalle(detalle) {
  try {
    console.log(detalle);
    await api.post("/libros-detalles", detalle);
  } catch (error) {
    console.error("Error creating libro detalle:", error);
  }
}

export async function updateLibro({ commit }, libro) {
  try {
    const { data } = await api.put(`/libros/${libro.id}`, libro);
    commit("updateLibro", data);
  } catch (error) {
    console.error("Error updating libro:", error);
  }
}

export async function deleteLibro({ commit }, id) {
  try {
    await api.delete(`/libros/id/${id}`);
    commit("removeLibro", id);
  } catch (error) {
    console.error("Error deleting libro:", error);
  }
}
