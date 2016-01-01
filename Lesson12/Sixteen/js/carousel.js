$(document).ready(function() {
    $("#carousel").owlCarousel({

        autoPlay: 5000,
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2]
    });
});
$(document).ready(function() {
    $("#team-carousel").owlCarousel({

        autoPlay: 5000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
        navigation: true,
        navigationText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>"
        ],
    });
});
