
$(function () {
    // init
    new Splide('.banners').mount();
    new Splide('#galery1', {
        type: 'loop',
        perPage: 6,
        perMove: 1,
    }).mount();
    new Splide('#galery2', {
        type: 'loop',
        perPage: 6,
        perMove: 1,
    }).mount();
    new Splide('.post_slider').mount();
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