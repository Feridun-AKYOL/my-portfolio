let lastScrollY = window.scrollY;
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
        // Scrolling up -> Show footer
        footer.style.bottom = "0";
    } else {
        // Scrolling down -> Hide footer
        footer.style.bottom = "-60px";
    }
    lastScrollY = window.scrollY;
});
