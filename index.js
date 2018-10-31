$(".w5 .ui_title_wrap h3 a").click(function () {
    if ($(this).parent().hasClass('on'))
        return false;
    else {
        $(".w5 .ui_title_wrap h3").removeClass('on');
        $(this).parent().addClass('on');
        $(".w5 ul").hide();
        $(".w5 ul:eq(" + $(this).parent().index() + ")").fadeIn();
    }
});


