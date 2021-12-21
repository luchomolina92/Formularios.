const d = document;
export default function secretoMagico(secreto, frase) {
  let secretoMagico = '';
  d.addEventListener('keydown', e=> {
    secretoMagico += e.key;

    if(secretoMagico.length >= secreto.length){
      if(secretoMagico === secreto) alert(frase)
      secretoMagico = ''
    }
    
    if(secreto.indexOf(secretoMagico) !== 0) secretoMagico = ''
  })
}