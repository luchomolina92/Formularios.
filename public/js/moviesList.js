import darEstilo from "./Components/darEstilo.js";
import darkMode from "./Components/darkMode.js";


((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const $body = d.body;
    const $h1 = d.querySelector('h1')

    // Agregar fondo oscuro ¿? (Un poco bastante feo como queda...)
    darkMode(confirm("¿Desea añadir modo oscuro?"))
    
    // Agregar mensaje
    $h1.innerHTML += "LISTADO DE PELÍCULAS";

    // Añadir estilos
    darEstilo($h1, "fontColor", "white")
    darEstilo($h1, "backgroundColor", "teal")
    darEstilo($h1, "padding", "20px")
  })
})(document);