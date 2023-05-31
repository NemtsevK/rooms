let card_button = document.querySelectorAll('.card-wrapper--active .card__button');
console.log(card_button);
card_button.addEventListener('click', ClickButton,false);

function ClickButton() {
    console.log('click');
    let card_wrapper = card_button[0].closest('.card-wrapper');
    card_wrapper.addEventListener('mouseleave', SetReserved, false);

    function SetReserved() {
        console.log('reserved');
        card_wrapper.classList.remove('card-wrapper--active');
        card_wrapper.classList.add('card-wrapper--selected');
        card_wrapper.addEventListener('click', CancelReserved,false);

        function CancelReserved() {
            console.log('cancel_reserved');
            card_wrapper.classList.remove('card-wrapper--selected');
            card_wrapper.classList.add('card-wrapper--active');
        }
    }

}




