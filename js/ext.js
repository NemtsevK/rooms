$(document).ready(function () {
    $('.card-list__item:not(.card-list__item--active)').find('.card__button').on('click', function () {
        $(this).parents('.card-list__item').on('mouseleave', function () {
            $(this)
                .addClass('card-list__item--active')
                .find('.card__overlay, .card__reserved-wrapper')
                .fadeIn('200');
        });
    });

    $('.card-list__item:not(.card-list__item--active)').on('click', '.card__button', function () {
        return false;
    }).on('click', function () {
        console.log($(this).hasClass('card-list__item--active'));
        if (!$(this).hasClass('card-list__item--active')) {
            $('.card-list__item--active')
                .removeClass('card-list__item--active')
                .find('.card__overlay, .card__reserved-wrapper')
                .fadeOut('200');
        }
    });

});

