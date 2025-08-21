document.addEventListener("DOMContentLoaded", function () {
  const selectors = [
    "body.is-mobile.landing #banner",
    "body.is-mobile.landing .wrapper.style4",
    "body.landing #page-wrapper",
    "#main > header"
  ];

  const images = [
    "../../images/pasta1.jpg",
    "../../images/pasta2.jpg",
    "../../images/pasta3.jpg"
  ];

  let index = 0;
  const displayDuration = 3000; // time each image shows

  // Preload images
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Function to update background
  function updateBackground(image) {
    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.backgroundImage =
          `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${image}")`;
      }
    });
  }

  // Set initial background
  updateBackground(images[index]);

  // Cycle images
  setInterval(() => {
    index = (index + 1) % images.length;
    updateBackground(images[index]);
  }, displayDuration);
});
