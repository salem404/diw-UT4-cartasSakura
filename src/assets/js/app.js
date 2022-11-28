const colorswitch = document.querySelector('#switch input[type="checkbox"]')
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("tema", "dia")
  } else {
    document.documentElement.setAttribute("tema", "noche")
  }
}

colorswitch.addEventListener("change", cambiaTema)
