$(function() {
    var anchorLink = $('ul li a'),
        anchorNav = $('ul');

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 1) {
            $('section').each(function(i) {
                // Adjust the condition to ensure correct activation of anchor links
                if ($(this).position().top <= windscroll + 100) {
                    $('ul li a.active').removeClass('active');
                    anchorLink.eq(i).addClass('active');
                }
            });

        } else {
            $(' ul li a.active').removeClass('active');
        }

    }).scroll();
});

// Anchor Sub Nav - Active on click
$('ul li a').on("click", function(f) {
    $('ul li a.active').removeClass('active');
    $(this).addClass('active');
});

// Progress Bar Scroll Pos
$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent;

    $(".progress-bar").attr('style', 'width:' + position + '%');
});
