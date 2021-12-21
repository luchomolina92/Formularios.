const d = document;

export default function moviesAddValidation() {
  const $inputs = d.querySelectorAll("#formulario [required]");

  $inputs.forEach(i => {
    const $span = d.createElement("span");
    $span.id = i.name;
    $span.textContent = i.title;
    $span.classList.add('none')
    i.insertAdjacentElement("afterend", $span)
  });
  
  d.addEventListener('change', e => {
    if (e.target.matches('#formulario [required]')) {
      let $input = e.target,
          pattern = $input.pattern,
          min = +$input.min,
          max = +$input.max;
          
      if(pattern){
        const regex = new RegExp(pattern);
        return (!regex.test($input.value)) ? $input.classList.add("is-invalid") : $input.classList.remove("is-invalid")
      }

      if(min && max) 
        return (!(+$input.value >= min && +$input.value <= max)) ? $input.classList.add("is-invalid") : $input.classList.remove("is-invalid")

    }
  })

}