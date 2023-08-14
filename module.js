// Initialize Swiper carousel
const swiper = new Swiper(".mySwiper", {
  slidesPerView: calculateSlidesPerView(),
  speed: 500,
  grid: {
    rows: calculateRows(),
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 10, // Adjust this value as needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Calculate the number of rows based on the viewport size
function calculateRows() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let rows = 1;

  switch (true) {
    case viewportWidth < 768 && viewportHeight < 500:
      rows = 1;
      break;
    case viewportWidth > 768 && viewportHeight >= 500:
      rows = 2;
      break;
    // Add more cases as needed
    default:
      rows = 2; // Default number of rows for larger viewports
      break;
  }

  return rows;
}

// Calculate the number of slides per view based on the viewport width
function calculateSlidesPerView() {
  const viewportWidth = window.innerWidth;
  
  let slidesPerView = 3;

  switch (true) {
    case viewportWidth < 768:
      slidesPerView = 1;
      break;
    case viewportWidth < 1100:
      slidesPerView = 2;
      break;
    // Add more cases as needed
    default:
      slidesPerView = 3; // Default number of slides per view for larger viewports
      break;
  }

  return slidesPerView;
}

// Update Swiper parameters and layout on window resize
window.addEventListener('resize', function() {
  swiper.params.slidesPerView = calculateSlidesPerView();
  swiper.params.grid.rows = calculateRows();
  swiper.update();
});



