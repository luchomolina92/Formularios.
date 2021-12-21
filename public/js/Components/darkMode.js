export default function darkMode(confirm){
  if(!confirm) return
  document.body.style.backgroundColor = "#7f7f7f"
  document.body.classList.add("fondoMoviesList")
}
