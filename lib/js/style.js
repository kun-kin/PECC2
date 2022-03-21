$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed-header');
    } else {
        $('.header').removeClass('fixed-header');
    }
});


$(document).ready(function() {
    /* // check-active popup */
    $(".header-search .header-search__icons").click(function() {
        if (!$(this).parents(".header-search").hasClass("active")) {
            $(this).parents(".header-search").addClass("active");
            $(".header-language").removeClass("active");
        } else {
            $(this).parents(".header-search").removeClass("active");
        }
    });
    $(".header-language .language-icons").click(function() {
        if (!$(this).parents(".header-language").hasClass("active")) {
            $(this).parents(".header-language").addClass("active");
            $(".header-search").removeClass("active");
        } else {
            $(this).parents(".header-language").removeClass("active");
        }
    });

    /* next menu active */


    /* menu-toggle menu */
    $(".menu-toggle").click(function() {
        $(this).addClass("show-menu");
        $(".menu-mobile").addClass("show-menu");
    });
    $(".close-menu-mobile").click(function() {
        $(".menu-toggle").removeClass("show-menu");
        $(".menu-mobile").removeClass("show-menu");
        $("li").removeClass("active");
        $(".btn-submenu").removeClass("show");
    });


    /* show menu mobile */
    $("li .btn-submenu").click(function() {
        $(this).addClass("show");
        $(this).parents("li").addClass("active");
    })


    /* remove menu mobile */
    $("li .back-menu").click(function() {
        $(this).parents("li:first").removeClass("active");
        $(this).parents("li:first").children(".btn-submenu").removeClass("show");
    })




    /* banner slide */
    $('.banner-slide__content').slick({
        fade: true,
        autoplay: false,
        dots: true,
        arrows: false,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        // speed: 1000,
    });

    /* project slide */
    $('.project-slide__content').slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
    });

    /* // news slide */
    $('.slider-for').slick({
        fade: true,
        autoplay: false,
        dots: false,
        arrows: true,
        pauseOnHover: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        arrows: false,
        slidesToShow: 3,
        // centerMode: true,
        slidesToScroll: 1,
        centerPadding: "20px",
        asNavFor: '.slider-for',
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 1000
    });

    /* // news slide tab history */
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 7,
    });

    /* // back to top */
    var btn = $('#backtotop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '1000');
    });


    // couter-up
    $(".number").counterUp({
        delay: 10,
        time: 2000
    });

    /* new html slide */
    $('.news-about').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });




    /* chứng nhận introduce slide */
    $('.your-class').slick({
        // centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '60px',
    });


});