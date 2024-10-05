const carousel = document.querySelector('.carousel');

let scrollAmount = 0;
let slideWidth = 340; // Width of each review
let maxScroll = carousel.scrollWidth - carousel.clientWidth;

function scrollCarousel(direction) {
    if (direction === 'next') {
        scrollAmount += slideWidth;
        if (scrollAmount > maxScroll) scrollAmount = 0; // Loop back to the start
    } else {
        scrollAmount -= slideWidth;
        if (scrollAmount < 0) scrollAmount = maxScroll; // Go back to the last slide
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Optional: Set up autoplay
setInterval(() => scrollCarousel('next'), 3000);
