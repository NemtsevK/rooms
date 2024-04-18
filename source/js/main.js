const cardButtons = document.querySelectorAll('.card__button');

cardButtons.forEach(cardButton => {
  cardButton.addEventListener('click', onCardClick);
})

function onCardClick() {
  const cardWrapper = this.closest('.card-wrapper');
  cardWrapper.addEventListener('mouseleave', onCardMouseLeave);
}

function onCardMouseLeave() {
  const cardWrapper = this;
  cardWrapper.removeEventListener('mouseleave', onCardMouseLeave);
  cardWrapper.classList.remove('card-wrapper--active');
  cardWrapper.classList.add('card-wrapper--selected');
  cardWrapper.removeEventListener('click', onCardClick);
  cardWrapper.addEventListener('click', cancelReserved);
}

function cancelReserved() {
  const cardWrapper = this;
  cardWrapper.removeEventListener('click', cancelReserved);
  cardWrapper.classList.remove('card-wrapper--selected');
  cardWrapper.classList.add('card-wrapper--active');
}
