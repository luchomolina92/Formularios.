import addClaseBody from "./Components/claseBody.js";
import { addClassImpares, addClassPares } from "./Components/darClase.js";
import darColor from "./Components/darColor.js";
import secretoMagico from "./Components/MaquinaEstado.js";
import toggleMenu from "./Components/Menu.js";
import pedirNombre from "./Components/pedirNombre.js";
import upperCaseStyle from "./Components/upperCaseStyle.js";

((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const $main = d.querySelector('main')
    const $h2 = d.querySelector('h2')
    const $a = d.querySelector('a')
    const $p = d.querySelectorAll('p')
    
    // Maquina estado secreto
    secretoMagico('secreto', 'SECRETO MAGICO');
    
    $main.display = "block"
    // Pido el nombre
    $h2.innerHTML = pedirNombre();

    // Vuelvo en mayúscula un elemento (h2) 
    upperCaseStyle($h2)

    // Doy color a un elemento
    darColor($a, '#E51B3E')

    // Agregar clase al body
    addClaseBody('fondo', confirm("¿Desea agregar fondo al body"))

    // Agregar clase a im/pares
    addClassPares($p, "destacadoPar")
    addClassImpares($p, "destacadoImpar")

    // Mostrar Menu
    toggleMenu(".logoDH", "menu")

    // Eventos MouseOver
    const colorh2 = $h2.style.color;
    d.addEventListener('mouseover', e => {
      if(e.target === $h2) darColor($h2, 'tomato')
    })
    d.addEventListener('mouseout', e => {
      if(e.target === $h2) darColor($h2, colorh2)
    })
  })
})(document);