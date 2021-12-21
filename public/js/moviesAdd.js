import addClass from "./Components/darClase.js";
import moviesAddValidation from "./Components/moviesAddValidation.js";


((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const $h1 = d.querySelector('h1'),
          $section = d.querySelector('section'),
          $article = d.querySelector('article');

    // Agregar mensaje
    $h1.innerHTML += "AGREGAR PELÍCULAS";

    // Agregar clases
    addClass($h1, "titulo")
    addClass($article, "fondoTransparente")
    addClass($section, "fondoCRUD")

    // Validacion
    moviesAddValidation()
  })
  
})(document);