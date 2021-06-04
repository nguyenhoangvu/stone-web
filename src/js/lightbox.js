var slideIndex = 1;
let imgs = document.querySelectorAll('.column-image')
let index
imgs.forEach(function (check) {
  check.addEventListener('click', checkIndex);
})

function checkIndex(event) {
  index = Array.from(imgs).indexOf(event.target) + 1;
  currentSlide(index)
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}