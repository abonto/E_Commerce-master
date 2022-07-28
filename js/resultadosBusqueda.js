import { funciones } from "./funciones.js";

const nombre = funciones.obtenerInformacion("nombre");
const titulo = document.querySelector("[data-busqueda]")
const espacioContainer = document.querySelector("[data-productos]")
const ubicacionCantidad = document.querySelector("[data-cantidad]")

titulo.textContent = `Resultados encontrados de "${nombre}"`
funciones.mostrarProductosNombre(espacioContainer,nombre,ubicacionCantidad)