$(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true
        }

    }, {

        breakpoint: 300,
        // settings: "unslick" // destroys slick

    }]
});