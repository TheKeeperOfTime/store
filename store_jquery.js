//For the NavBar

$(document).ready(function(){

$('.thumb').hover(function(){
    $(this).find('.caption').css('opacity','1');
}, function(){
    $(this).find('.caption').css('opacity','0');
});

});