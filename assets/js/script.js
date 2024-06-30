const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.recently-list');

let scrollPosition = 0;

nextButton.addEventListener('click', () => {
    const itemWidth = document.querySelector('.recently-box').offsetWidth + 15; // Including margin
    if (scrollPosition < (carousel.scrollWidth - carousel.clientWidth)) {
        scrollPosition += itemWidth;
        carousel.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
});

prevButton.addEventListener('click', () => {
    const itemWidth = document.querySelector('.recently-box').offsetWidth + 15; // Including margin
    if (scrollPosition > 0) {
        scrollPosition -= itemWidth;
        carousel.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
});


$(document).ready(function() {
    $('#autoWidth, #autoWidth2, #autoWidth3').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth, #autoWidth2, #autoWidth3').removeClass('cS-hidden');
        }
    });

    $('#toggle-dark-mode').on('click', function() {
        $('body').toggleClass('dark-mode');
    });

    $('#autoWidth4').lightSlider({
        item: 7,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive : [
            {
                breakpoint: 1500,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    item: 5,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0
                }
            }
        ]
    });  
});
