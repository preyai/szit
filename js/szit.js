
$(function () {
    // init
    
    // 
    $('.select2').select2({
        width: 'max-content'
    });

    console.log('start');
    
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('#mobil-menu').toggleClass('active');
        $('body').toggleClass('no_scroll');
    });
    $('.square').each(function (element) {
        $(this).height($(this).width());
    });

    $('.qest').on('click', function () {
        console.log($(this));
        $(this).closest('.qestion').toggleClass('active');
    });
})