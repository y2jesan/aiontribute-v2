// DESKTOP RANGE START
$( function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000000,
        values: [1000000, 4000000],
        slide: function( event, ui ) {
            $("#low").val(ui.values[0]);
            $("#high").val(ui.values[1]);
        }
    });

    $("#low").val( $("#slider-range").slider("values", 0));
    $("#high").val( $("#slider-range").slider("values", 1));
} );

// MOBILE RANGE START
$( function() {
    $("#mobile-slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [1000, 4000],
        slide: function(event, ui) {
            $( "#low-mobile" ).val( ui.values[0]);
            $( "#high-mobile" ).val( ui.values[1]);
        }
    });

    $("#low-mobile").val( $("#mobile-slider-range").slider("values", 0));
    $("#high-mobile").val( $("#mobile-slider-range").slider("values", 1));
} );