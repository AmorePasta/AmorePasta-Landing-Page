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
  const fadeDuration = 1000;
  const displayDuration = 3000;

  // Preload images to ensure they are ready from the start
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Set the initial background
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) {
      el.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${images[0]}")`;
    }
  });

  setInterval(() => {
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex];

    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;

      // Put the next image on the overlay. It's already preloaded.
      el.style.setProperty("--fade-overlay-img",
        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${nextImage}")`
      );

      // Trigger the fade-in
      el.style.setProperty("--fade-overlay-opacity", "1");
    });

    // After the fade, swap the base background and hide the overlay for the next cycle
    setTimeout(() => {
      selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (!el) return;

        el.style.backgroundImage =
          `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${nextImage}")`;
        el.style.setProperty("--fade-overlay-opacity", "0");
      });
    }, fadeDuration); // This matches your CSS transition duration

    index = nextIndex;
  }, displayDuration + fadeDuration);
});