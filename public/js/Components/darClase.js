export function addClassPares(nodeList, clase){
  nodeList.forEach((el, i) => { 
    if((i+1) % 2 === 0)
      el.classList.add(clase)
  })
}

export function addClassImpares(nodeList, clase){
  nodeList.forEach((el, i) => { 
    if((i+1) % 2 !== 0)
      el.classList.add(clase)
  })
}

export default function addClass(element, clase){
  element.classList.add(clase)
}

export function removeClass(element, clase){
  element.classList.remove(clase)
}
