import { createStore } from "vuex";
import { api } from "@/api/Api";
import { apiStock } from "@/api/Api";
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
import { login } from "./api";
import{
  fetchAutor,
  fetchAutores,
  createAutor,
  updateAutor,
  deleteAutor,
  searchAutores,
} from "./autores";
import {
  fetchGenero,
  fetchGeneros,
  createGenero,
  deleteGenero,
} from "./generos";
import {
  fetchLibro,
  fetchLibros,
  createLibro,
  deleteLibro,
} from "./libros";

export default createStore({
  state: {
    clientes: [],
    cliente: null,
    proveedores: [],
    proveedor: null,
    token: sessionStorage.getItem("token") || "",
    autores: [],
    autor: null,
    generos: [],
    genero: null,
    libros: [],
    libro: null,
  },
  getters: {
    getClientes: (state) => state.clientes,
    getProveedores: (state) => state.proveedores,
    getToken: (state) => state.token,
    getAutores: (state) => state.autores,
    getGeneros: (state) => state.generos,
    getLibros: (state) => state.libros,

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
    login,
    fetchAutores,
    fetchAutor,
    deleteAutor,
    createAutor,
    updateAutor,
    searchAutores,
    fetchGeneros,
    fetchGenero,
    deleteGenero,
    createGenero,
    fetchLibros,
    fetchLibro,
    deleteLibro,
    createLibro,
  },
  mutations: {
    setToken: (state, token) => {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      apiStock.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
    },
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
    setAutores: (state, autores) => (state.autores = autores),
    setAutor: (state, autor) => (state.autor = autor),
    addAutor: (state, autor) => state.autores.push(autor),
    removeAutor: (state, id) => {
      if (Array.isArray(state.autores)) {
        state.autores = state.autores.filter((autor) => autor.id !== id);
      } else {
        console.error('state.autores is not an array');
      }
    }
    ,
    setGeneros: (state, generos) => (state.generos = generos),
    setGenero: (state, genero) => (state.genero = genero),
    addGenero: (state, genero) => state.generos.push(genero),
    removeGenero: (state, id) => {
      state.generos = state.generos.filter((genero) => genero.id !== id);
    },
    setLibros: (state, libros) => (state.libros = libros),
    setLibro: (state, libro) => (state.libro = libro),
    addLibro: (state, libro) => state.libros.push(libro),
    removeLibro: (state, id) => {
      state.libros = state.libros.filter((libro) => libro.id !== id);
    },
  },
  modules: {},
});
