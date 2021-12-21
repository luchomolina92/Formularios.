const d = document;

export default function toggleMenu(disp, menu) {
  const $menu = d.getElementById(menu)
  d.addEventListener('click', e => {
    if(e.target.matches(`${disp} *`)){
      $menu.classList.toggle("active")
      console.log($menu)
    }
  })
}