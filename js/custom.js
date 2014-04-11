// console.log('\'Allo \'Allo!');
(function($) {
    'use strict';

    $(document).ready(function() {
        smoothScroll.init();

        // Pause video and set bar to white background
        $(window).scroll(function() {
            // var bottomOfVideo = $("#about").position().top;
            var width = $(window).width();
            var bottomOfVideo = $('#about').offset().top;
            var bottomOfWindow = $(window).scrollTop();
            if (width > 768) {
                if (bottomOfWindow + 50 > bottomOfVideo) {
                    $('.navbar-inverse').css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                    $('.navbar-inverse .navbar-nav > li > a').css('color', 'black');
                    $('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus').css('color', '#2ec9ea');
                    $('.navbar-inverse').css('box-shadow', '0px 2px 33px rgba(0, 0, 0, 0.35)');

                } else {
                    $('.navbar-inverse').css({
                        'background-color': 'transparent',
                        'color': 'white'
                    });
                    $('.navbar-inverse .navbar-nav > li > a').css('color', 'white');
                    $('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus').css('color', '#2ec9ea');
                    $('.navbar-inverse').css('box-shadow', 'none');
                }
            }
        });
    });
})(jQuery);