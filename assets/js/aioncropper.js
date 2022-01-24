let profileImage = 'medallion/medallion-thumbnail.png';

/** INITIALIZATION CROPPIE JS */
let basic = $('#uploadImage').croppie({
    viewport: {
        width: 300,
        height: 300,
        type: 'circle'
    },
    mouseWheelZoom: true,
    boundary: { width: 300, height: 300 },
    showZoomer: true,
    enforceBoundary: true,
    url: profileImage,
    points: [389.619,-352.697,0,0.3521]
});

/** ADD IMAGE TO CROPPIE JS */
$('#uploadMoment').on('change', function(){
    let reader = new FileReader();
    reader.onload = function(event){
        basic.croppie('bind',{
            url:event.target.result
        }).then(function(){
            console.log('jQuery bind complete');
        });
    }
    reader.readAsDataURL(this.files[0]);
});

/** ADD IMAGE CROPPIE TO MEDALLION */
$(document).on('click', '#addmedallion', function (ev) {
    basic.croppie('result', {
        type: 'base64',
        format: 'jpeg',
        size: 'original'
    }).then(function (resp) {
        $('#medallionImage').attr('src', resp);
        $('.modal').modal('hide');
    });
});

