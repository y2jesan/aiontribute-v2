var el = document.querySelector('.uploadbox');
var vanilla = new Croppie(el, {
    viewport: { width: 400, height: 400 },
    boundary: { width: 260, height: 260 },
    showZoomer: false,
    enableOrientation: true
});
vanilla.bind({
    url: '../images/face/face-4.jpg',
    orientation: 4
});
//on button click
vanilla.result('blob').then(function(blob) {
    // do something with cropped blob
});