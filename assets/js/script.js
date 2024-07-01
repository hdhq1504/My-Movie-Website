const initSlider = () => {
    const imageList = document.querySelector(".wrapper .img-list");
    const slideButtons = document.querySelectorAll(".wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

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
