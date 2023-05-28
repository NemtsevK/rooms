$(document).ready(function () {
    $('.card-wrapper--active')
        .find('.card__button')
        .on('click', ClickButton);
});

function ClickButton() {
    console.log('click-active');
    $(this)
        .parents('.card-wrapper')
        .on('mouseleave', SetReserved);
}

function SetReserved() {
    console.log('mouseleave-active');
    $(this)
        .off('mouseleave')
        .removeClass('card-wrapper--active')
        .addClass('card-wrapper--selected')
        .off('click')
        .on('click', CancelReserved);
}

function CancelReserved() {
    console.log('click-selected');
    $(this)
        .off('click')
        .removeClass('card-wrapper--selected')
        .addClass('card-wrapper--active')
}
