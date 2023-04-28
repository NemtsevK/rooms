$(document).ready(function () {
    $(".card").on("mouseover",function () {
        if(!$(this).children(".card__reserved:visible").length && $(this).children(".best_price.active").length){
            $(this).children(".best_price.active").fadeIn("200");
            $(".card").on("mouseleave",function () {
                $(this).children(".best_price.active").fadeOut("200");
            });
        }
    });

    $(".card").find(".button").on("click",function () {
        $(this).parents(".card").on("mouseleave",function () {
            $(this).find(".card__reserved, .footer__reserved").fadeIn("200");
            $(this).find(".best_price.active").fadeOut("200");
            $(".card").off("mouseleave");
        });
    });

    $(".card").on("click",".button",function(){
        return false;
    }).on("click",function () {
        $(".card").find(".card__reserved, .footer__reserved").fadeOut("200");
    });

});

