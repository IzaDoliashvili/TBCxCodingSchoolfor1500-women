document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          header.classList.add("header_fixed");
        } else {
          header.classList.remove("header_fixed");
        }
});
});


