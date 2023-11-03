function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

const image = document.querySelector(".rocket");

image.addEventListener("click", function() {
  window.scrollTo(0, 0);
});