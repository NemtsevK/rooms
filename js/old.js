

// $('.card-wrapper--active')
//     .find('.card__button')
//     .on('click', function () {
//         $(this)
//             .parents('.card-wrapper')
//             .on('mouseleave', function () {
//                 $(this)
//                     .off('mouseleave')
//                     .removeClass('card-wrapper--active')
//                     .addClass('card-wrapper--selected')
//                     .off('click')
//                     .on('click', function () {
//                         $(this)
//                             .off('click')
//                             .removeClass('card-wrapper--selected')
//                             .addClass('card-wrapper--active')
//                     });
//             });
//     });

//
//
// function ClickButton(e_click,button) {
//     console.log(e_click.target);
//     console.log(button);
//     if (button.classList.contains('card__button')) {
//         console.log('click');
//         // button.addEventListener('click',function (e_click) {
//         //     ClickButton(e_click,button)
//         // });
//         let card_wrapper = e_click.target.closest('.card-wrapper');
//         card_wrapper.addEventListener('mouseleave', function (e_leave) {
//             SetReserved(e_leave,card_wrapper,button);
//         });
//     }
// }
//
// function SetReserved (e_leave,card_wrapper,button) {
//     if(e_leave.target.classList.contains('card-wrapper--active')){
//         console.log('mouseleave');
//         card_wrapper.removeEventListener('mouseleave', function (e_leave) {
//             SetReserved(e_leave,card_wrapper);
//         });
//         card_wrapper.classList.remove('card-wrapper--active');
//         card_wrapper.classList.add('card-wrapper--selected');
//         card_wrapper.addEventListener('click', function (event) {
//             CancelReserved(event,card_wrapper,button);
//         });
//     }
// }
//
// function CancelReserved (event,card_wrapper,button) {
//     if(event.target.closest('.card-wrapper--selected')){
//         console.log('cancel_reserved')
//         card_wrapper.removeEventListener('click', function (event) {
//             CancelReserved(event,card_wrapper);
//         });
//         button.removeEventListener('click',function (e_click) {
//             ClickButton(e_click,button);
//             console.log('remove');
//             card_wrapper.classList.remove('card-wrapper--selected');
//             card_wrapper.classList.add('card-wrapper--active');
//         });
//
//         // button.addEventListener('click',function (e_click) {
//         //     ClickButton(e_click,button)
//         // });
//
//     }
// }
//
// let button_array = document.querySelectorAll('.card__button');
//
// button_array.forEach(button => {
//     button.addEventListener('click',function (e_click) {
//         ClickButton(e_click,button)
//     });
// })


// document.addEventListener('click',ClickButton);
