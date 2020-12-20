// mobile menu toggler
const burgerIcon = document.getElementById('js--burger');
const mobileMenu = document.getElementById('js--nav-links');

burgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
});
