var  elModalButton = document.querySelector('.header__link');
var  elModalOpen = document.querySelector('.site-modal');
var elModalClose = document.querySelector('.modal__button--close')


elModalButton.addEventListener('click', function() {
  elModalOpen.classList.add('site-modal--open');
});

elModalClose.addEventListener('click', function() {
  elModalOpen.classList.remove('site-modal--open');
});