
$(function () {
    // init
    new Splide('.splide').mount();


    console.log('start');
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
    });
    $('.square').each(function(element) {
        // setHeight(element);
        $(this).height($(this).width());
    });
    function setHeight(item) {
        // console.log(this);
        this.height(this.width())
    }
})