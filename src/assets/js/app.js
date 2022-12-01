const colorswitch = document.querySelector("input[type='button']")
function cambiaTema() {
  if (document.documentElement.getAttribute("tema") == "dia") {
    document.documentElement.setAttribute("tema", "noche")
  } else {
    document.documentElement.setAttribute("tema", "dia")
  }
}

colorswitch.addEventListener("click", cambiaTema)
