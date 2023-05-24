$(document).ready(function () {
    $('.card-wrapper:not(.card-wrapper--active)')
        .find('.card__button')
        .on('click', ClickButton);

    $('.card-wrapper:not(.card-wrapper--active)')
        .on('click', '.card__button', function () {return false;})
        .on('click', CancelReserved);
});

function ClickButton() {
    $(this).parents('.card-wrapper').on('mouseleave', SetReserved);
}

function SetReserved() {
    $(this)
        .off('mouseleave')
        .addClass('card-wrapper--active')
        .find('.card-wrapper__overlay, .card-wrapper__reserved-wrapper')
        .fadeIn('200');
}

function CancelReserved() {
    if (!$(this).hasClass('card-wrapper--active')) {
        $('.card-wrapper--active')
            .removeClass('card-wrapper--active')
            .find('.card-wrapper__overlay, .card-wrapper__reserved-wrapper')
            .fadeOut('200');
    }
}
