import { funciones } from "./funciones.js";

let idSeccion = funciones.obtenerInformacion("id")

const seccion = document.querySelector("[data-espacio-productos]");

if(idSeccion == "StarWars"){
    const banner = document.querySelector("[data-banner]")
    banner.classList.add("starwars")
}else{
    if(idSeccion == "Consolas"){
        const banner = document.querySelector("[data-banner]")
        banner.classList.add("consolas")
    }else{
        if(idSeccion == "Diversos"){
            const banner = document.querySelector("[data-banner]")
            banner.classList.add("diversos")
        }
    }
}

funciones.mostrarProductosSeccion(seccion,idSeccion);