// mobile menu toggler
const burgerIcon = document.getElementById('js--burger');
const mobileMenu = document.getElementById('js--nav-links');

burgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
});

// tabs functionality
const tabs = document.querySelectorAll('.tabs li');
const tabContentDivs = document.querySelectorAll('#js--tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // remove is-active class from all tabs
    tabs.forEach((item) => {
      item.classList.remove('is-active');
    });
    // add is-active class only for clicked tab
    tab.classList.add('is-active');
    // identify corresponded content div
    // remove is-hidden class from this div
    // add is-hidden class to other divs
    const target = tab.dataset.target;
    tabContentDivs.forEach((div) => {
      if (div.getAttribute('id') === target) {
        div.classList.remove('is-hidden');
      } else {
        div.classList.add('is-hidden');
      }
    });
  });
});

// modal functionality
const signUpBtn = document.getElementById('js--signup-btn');
const modalBackground = document.querySelector('.modal-background');
const modalWindow = document.querySelector('.modal');
const modalCloseBtn = document.getElementById('js--modal-close-btn');

signUpBtn.addEventListener('click', () => {
  // add is-active class to modal window to show it
  modalWindow.classList.add('is-active');
});

// add event listener on modal background to close it on click
modalBackground.addEventListener('click', () => {
  modalWindow.classList.remove('is-active');
});

// add event listener on modal close btn to close it on click
modalCloseBtn.addEventListener('click', () => {
  modalWindow.classList.remove('is-active');
});
