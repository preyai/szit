
$(function () {
    // init
    
    // 
    $('.select2').select2({
        width: 'max-content'
    });

    console.log('start');
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
    });
    $('.square').each(function (element) {
        $(this).height($(this).width());
    });

    $('.qest').on('click', function () {
        console.log($(this));
        $(this).closest('.qestion').toggleClass('active');
    });
})