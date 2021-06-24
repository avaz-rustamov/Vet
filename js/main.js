var  elModalButton = document.querySelector('.header__link');
var  elModalOpen = document.querySelector('.site-modal');


elModalButton.addEventListener('click', function() {
  elModalOpen.classList.toggle('site-modal--open');
});