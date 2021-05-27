
$(function () {
    // init
    new Splide('.splide').mount();
    new Splide('.splide2', {
        type    : 'loop',
        perPage : 3,
        autoplay: true,
    }).mount();
    $('.select2').select2();

    console.log('start');
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
    });
    $('.square').each(function (element) {
        $(this).height($(this).width());
    });
})