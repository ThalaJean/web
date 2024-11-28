setTimeout(function () {
  var typed = new Typed(".text", {
    strings: [
      "   Bachelor of Science in Civil Engineering",
      "   Bachelor of Science in Computer Engineering",
      "   Bachelor of Science in Electrical Engineering",
      "   Bachelor of Science in Mechanical Engineering",
      "   Bachelor of Science in Mining Engineering",
    ],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}, 1500);

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {
    slideIndexAuto = 1;
  }
  slides[slideIndexAuto - 1].style.display = "block";
  setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}
