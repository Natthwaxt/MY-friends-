$(function() {


    function typeWriter (selector  , time , n , text ) {

        var interval = setInterval(function () {
            selector.each(function () {
                $(this).html($(this).html() + text[n]);
            });
            n +=1 ;
            if( n >= text.length ) {
                clearInterval(interval);
            }
        } , time);


    }
    typeWriter ($('.text2')  , 100 , 0 , $('.text2').data('text'));
    typeWriter ($('.text3')  , 100 , 0 , $('.text3').data('text'));


});