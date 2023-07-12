const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

let scrollPosition = 0;

prevBtn.addEventListener('click', () => {
    if (scrollPosition === 0) {
        return;
    }
    scrollPosition -= carouselItems[0].offsetWidth;
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    if (scrollPosition >= carousel.scrollWidth - carousel.offsetWidth) {
        return;
    }
    scrollPosition += carouselItems[0].offsetWidth;
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

// Add event listener to resize the photos on window resize
window.addEventListener("resize", resizePhotos);

// Resize the photos based on the window width
function resizePhotos() {
    var photoElements = document.getElementsByClassName("photo");
    var photoWidth = 30;
    if (window.innerWidth < 768) {
        photoWidth = 100;
    } else if (window.innerWidth < 992) {
        photoWidth = 47;
    }
    for (var i = 0; i < photoElements.length; i++) {
        photoElements[i].style.width = photoWidth + "%";
    }
}

// Call the resize function on page load
resizePhotos();
