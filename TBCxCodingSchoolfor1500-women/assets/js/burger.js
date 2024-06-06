document.addEventListener('DOMContentLoaded', function() {
    const wrapperMenu = document.querySelector(".burger_wrapper");
    const burgerLines = document.querySelectorAll(".burger_line");
    const navigationWrapper = document.querySelector(".navigation_wrapper");
    const navLinks = document.querySelectorAll(".nav_link");

    if (wrapperMenu) {
        wrapperMenu.addEventListener("click", function() {
            wrapperMenu.classList.toggle("open");
            burgerLines.forEach((burgerLine) => {
                burgerLine.classList.toggle("burger_line_active");
            });
            navigationWrapper.classList.toggle("navigation_wrapper_active");

            navLinks.forEach((navLink) => {
                navLink.classList.toggle("nav_link_active");
            });
        });
    } else {
        console.error('Element with class "burger_wrapper" not found.');
    }
});

