$(document).ready(function() {

    const sliderNav = $('.slider-nav');
    const backButton = '<button class="slick-prev slick-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" transform="rotate(-90 25 25)" fill="#F8F8F9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6513 27.8038C17.3584 27.5109 17.3584 27.036 17.6513 26.7431L24.4695 19.9249C24.6101 19.7843 24.8009 19.7053 24.9998 19.7053C25.1987 19.7053 25.3895 19.7843 25.5302 19.9249L32.3483 26.7431C32.6412 27.036 32.6412 27.5109 32.3483 27.8038C32.0554 28.0967 31.5806 28.0967 31.2877 27.8038L24.9998 21.5159L18.712 27.8038C18.4191 28.0967 17.9442 28.0967 17.6513 27.8038Z" fill="#DFE3EA"/></svg></button>';
    const nextButton = '<button class="slick-next slick-arrow"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" transform="rotate(90 25 25)" fill="#F8F8F9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3487 22.1962C32.6416 22.4891 32.6416 22.964 32.3487 23.2569L25.5305 30.0751C25.3899 30.2157 25.1991 30.2947 25.0002 30.2947C24.8013 30.2947 24.6105 30.2157 24.4698 30.0751L17.6517 23.2569C17.3588 22.964 17.3588 22.4891 17.6517 22.1962C17.9446 21.9033 18.4194 21.9033 18.7123 22.1962L25.0002 28.4841L31.288 22.1962C31.5809 21.9033 32.0558 21.9033 32.3487 22.1962Z" fill="#DFE3EA"/></svg></button>';
    
    sliderNav.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        vertical: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: backButton,
        nextArrow: nextButton,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    const sliderContent = $('.slider-for');

    sliderContent.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav',
    });
    
});