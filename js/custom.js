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

    $(document).scroll(function(event) {
        var newHeight = ($(window).scrollTop() / $(document).height()) * 1200 * (-1) + 500;
        // console.log(newHeight);
        $("section.background1").css("background-position-y", newHeight + "px");
    });



    $(document).ready(function($) {

        $(function($) {
            $('form[data-async]').on('submit', function(event) {
                var $form = $(this);
                var $target = $($form.attr('data-target'));

                $.ajax({
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    data: $form.serialize(),

                    success: function(data, status) {
                        $target.modal('hide');
                        console.log(data);
                        var response = $.parseJSON(data);
                        console.log(response);

                        if(response.message === 'success') {
                            $('#email-form').trigger("reset");
                            console.log(data);
                            $('#callback_response').html('Thank you! You will receive a confirmation email shortly');
                        }
                        else {
                            $('#email-form').trigger("reset");
                            console.log(data);

                            $('#callback_response').html('Oops, something went wrong :c !') 
                        }
                    }
                });

                event.preventDefault();
            });
        });        
        
    });
})(jQuery);