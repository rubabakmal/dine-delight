jQuery(function ($) {
    "use strict";

    /* Window Load ---------------------- */

    $(window).on('load', function () {


    });


    /* Document Ready ------------------- */

    $(document).ready(function () {

        AOS.init({
            duration:2000
        });


    });


    /* Window Scroll -------------------- */

    $(window).on('scroll', function () {


        let scroll = $(window).scrollTop();
        if (scroll >= 100){
            $('.header-wrap').addClass('scrolled');

        }else{
            $('.header-wrap').removeClass('scrolled');
        }


    });


    /* Window Resize -------------------- */

    $(window).on('resize', function () {


    });

});