let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
  // Hide all slides and remove active class
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Increment slide index and reset if at the end
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');

  // Rotate every 5 seconds
  setTimeout(showSlides, 5000); 
}

// Start the carousel
showSlides();

// Optional: Manual navigation (if you want to add buttons or clickable dots)
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}