$(document).ready(function() {
    const sliderNav = $('.slider-nav');
    
    sliderNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: true,
        autoplay: false,
        speed: 300,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        centerMode: true,
        cssEase: 'linear',
        variableWidth: false
    });

    const sliderContent = $('.slider-for');

    sliderContent.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 300,
        fade: false,
        dots: true,
        infinite: true,
        asNavFor: '.slider-nav',
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)'
    });

    
});