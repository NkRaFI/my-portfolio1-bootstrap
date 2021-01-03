// owl-carousel
$(document).ready(function () {

    // Owl-carousel

    $('.tech-area .carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })


});