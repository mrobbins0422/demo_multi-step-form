console.log('the javascript file has loaded');

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {

var barstatus = document.getElementById("icon-bar");
if (n == 1) {
  document.getElementById("icon-bar").classList.remove("lit-left");
  document.getElementById("icon-bar").classList.remove("lit-right");
}
if (n == 2) {
  document.getElementById("icon-bar").classList.add("lit-left");
  document.getElementById("icon-bar").classList.remove("lit-right");
}
if (n == 3) {
  document.getElementById("icon-bar").classList.add("lit-right");
}



  var i;
  console.log(n);
  var slides = document.getElementsByClassName("mySlides");
  // console.log(slides);
  var dots = document.getElementsByClassName("dot");
  // console.log(dots);
  var icons = document.getElementsByClassName("box-icon");
  console.log(icons);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i=0; i < icons.length; i++) {
    icons[i].className = icons[i].className.replace(" icon-lit", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  icons[slideIndex - 1].className += " icon-lit";
}

