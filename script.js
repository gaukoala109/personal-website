const btnHamburger = document.getElementsByClassName('hamburger-button')[0];
const links = document.getElementsByClassName('links')[0];

btnHamburger.addEventListener('click', () => {
  links.classList.toggle('show');
})