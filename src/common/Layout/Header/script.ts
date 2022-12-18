// Reponsive menu
const hamburger = document.querySelector('.header__hamburger');
const navBar = document.querySelector('.header__navigation');
hamburger?.addEventListener('click', () => {
  navBar?.classList.toggle('active');
  hamburger?.classList.toggle('close');
  alert('Joseph');
});
