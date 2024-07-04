$(document).ready(function() {
    $('#autoWidth, #autoWidth2, #autoWidth3, #autoWidth4').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidth2, #autoWidth3, #autoWidth4').removeClass('cS-hidden');
        }
    });

    $('#toggle-dark-mode').on('click', function() {
        $('body').toggleClass('dark-mode');
    }); 
});
