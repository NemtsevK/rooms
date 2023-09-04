let buttonArray = document.querySelectorAll('.card__button');

buttonArray.forEach(cardButton => {
    cardButton.addEventListener('click', clickButton);
})

function clickButton() {
    let cardWrapper = this.closest('.card-wrapper');
    cardWrapper.addEventListener('mouseleave', setReserved);
}

function setReserved() {
    let cardWrapper = this;
    cardWrapper.removeEventListener('mouseleave', setReserved);
    cardWrapper.classList.remove('card-wrapper--active');
    cardWrapper.classList.add('card-wrapper--selected');
    cardWrapper.removeEventListener('click', clickButton);
    cardWrapper.addEventListener('click', cancelReserved);
}

function cancelReserved() {
    let cardWrapper = this;
    cardWrapper.removeEventListener('click', cancelReserved);
    cardWrapper.classList.remove('card-wrapper--selected');
    cardWrapper.classList.add('card-wrapper--active');
}
