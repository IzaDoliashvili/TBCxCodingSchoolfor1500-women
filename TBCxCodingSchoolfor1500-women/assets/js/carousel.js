document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const navLinks = document.querySelectorAll(".nav-container a");
    let isFocused = false;

    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + "%";
        carousel.style.transform = `translateX(${newTransformValue})`;
        updateNavLinks();
    }

    function updateNavLinks() {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[currentIndex].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    nextBtn.addEventListener("click", () => {
        isFocused = true;
        nextSlide();
        setTimeout(() => {
            isFocused = false;
        }, 5000);
    });

    prevBtn.addEventListener("click", () => {
        isFocused = true;
        prevSlide();
        setTimeout(() => {
            isFocused = false;
        }, 5000);
    });

    navLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            isFocused = true;
            currentIndex = index;
            updateCarousel();
            setTimeout(() => {
                isFocused = false;
            }, 5000);
        });
    });

    setInterval(() => {
        if (!isFocused) {
            nextSlide();
        }
    }, 3500);
});












