const colorswitch = document.querySelector("input[type='button']")
function cambiaTema() {
  if (document.documentElement.getAttribute("tema") == "dia") {
    document.documentElement.setAttribute("tema", "noche")
  } else {
    document.documentElement.setAttribute("tema", "dia")
  }
}

colorswitch.addEventListener("click", cambiaTema)

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}
