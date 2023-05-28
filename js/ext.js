$(document).ready(function () {
    $('.card-wrapper--active')
        .find('.card__button')
        .on('click', ClickButton);
});

function ClickButton() {
    $(this)
        .parents('.card-wrapper')
        .on('mouseleave', SetReserved);
}

function SetReserved() {
    $(this)
        .off('mouseleave')
        .removeClass('card-wrapper--active')
        .addClass('card-wrapper--selected')
        .off('click')
        .on('click', CancelReserved);
}

function CancelReserved() {
    $(this)
        .off('click')
        .removeClass('card-wrapper--selected')
        .addClass('card-wrapper--active')
}
