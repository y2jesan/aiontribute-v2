
$(document).ready(function(){
    if($('.category-slider').length > 0) {
        $('.category-slider').owlCarousel({
            margin: 24,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            responsive : {
                // breakpoint from 768 up
                0 : {
                    items: 2
                },

                400 : {
                    items: 3
                },

                768 : {
                    items: 4
                },
        
                // breakpoint from 768 up
                991 : {
                    items: 5
                },
        
                // breakpoint from 768 up
                1200 : {
                    items: 8
                }
            }
        });

        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-nav').removeClass('disabled');
        });

        $(".owl-prev").html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.80377 15.3487C8.51087 15.6416 8.036 15.6416 7.74311 15.3487L0.924923 8.53051C0.784271 8.38986 0.705254 8.19909 0.705254 8.00018C0.705254 7.80126 0.784271 7.6105 0.924923 7.46985L7.74311 0.651666C8.036 0.358772 8.51087 0.358772 8.80377 0.651666C9.09666 0.944559 9.09666 1.41943 8.80377 1.71233L2.51591 8.00018L8.80377 14.288C9.09666 14.5809 9.09666 15.0558 8.80377 15.3487Z" fill="#0D111B"/></svg>');
        $(".owl-next").html('<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1962 6.65131C11.4891 6.35842 11.964 6.35842 12.2569 6.65131L19.0751 13.4695C19.2157 13.6101 19.2947 13.8009 19.2947 13.9998C19.2947 14.1987 19.2157 14.3895 19.0751 14.5302L12.2569 21.3483C11.964 21.6412 11.4891 21.6412 11.1962 21.3483C10.9033 21.0554 10.9033 20.5806 11.1962 20.2877L17.4841 13.9998L11.1962 7.71197C10.9033 7.41908 10.9033 6.9442 11.1962 6.65131Z" fill="#0D111B"/></svg>');
    }

    if($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({
            margin: 8,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            responsive : {
                // breakpoint from 768 up
                0 : {
                    items: 2
                },

                400 : {
                    items: 2
                },

                768 : {
                    items: 3
                },
        
                // breakpoint from 768 up
                991 : {
                    items: 4
                },
        
                // breakpoint from 768 up
                1200 : {
                    items: 6
                }
            }
        });

        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-nav').removeClass('disabled');
        });

        $(".owl-prev").html('<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.80377 15.3487C8.51087 15.6416 8.036 15.6416 7.74311 15.3487L0.924923 8.53051C0.784271 8.38986 0.705254 8.19909 0.705254 8.00018C0.705254 7.80126 0.784271 7.6105 0.924923 7.46985L7.74311 0.651666C8.036 0.358772 8.51087 0.358772 8.80377 0.651666C9.09666 0.944559 9.09666 1.41943 8.80377 1.71233L2.51591 8.00018L8.80377 14.288C9.09666 14.5809 9.09666 15.0558 8.80377 15.3487Z" fill="#0D111B"/></svg>');
        $(".owl-next").html('<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1962 6.65131C11.4891 6.35842 11.964 6.35842 12.2569 6.65131L19.0751 13.4695C19.2157 13.6101 19.2947 13.8009 19.2947 13.9998C19.2947 14.1987 19.2157 14.3895 19.0751 14.5302L12.2569 21.3483C11.964 21.6412 11.4891 21.6412 11.1962 21.3483C10.9033 21.0554 10.9033 20.5806 11.1962 20.2877L17.4841 13.9998L11.1962 7.71197C10.9033 7.41908 10.9033 6.9442 11.1962 6.65131Z" fill="#0D111B"/></svg>');
    }
});