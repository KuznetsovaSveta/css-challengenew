$('.burger').bind('click', function() {
    $(this).toggleClass('active');
    $(this).find('span').removeClass('no-animation');
});