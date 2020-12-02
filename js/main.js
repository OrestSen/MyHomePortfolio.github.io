
$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
    $('select').styler();

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    })
});

$('.menu').onePageNav()

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
});

$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});

// **********************************************************************************
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).pageYOffset();
//         if (scroll < 700 || scroll == 700) {
//             $(".navigation").addClass("active-shadow");
//         } else if ( scroll > 700 || scroll <= 1100) {
//             $(".navigation").removeClass("active-shadow");
//             $(".navigation").addClass("active-violet");
//         } else if ( scroll > 1100 || scroll <= 1700) {
//             $(".navigation").removeClass("active-violet");
//             $(".navigation").addClass("active-shadow");
//         } 
//     })
// })


// $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 500) {
//         $(".navigation").addClass("active-violet");
//     } else if ($(window).scrollTop() > 800)  {
//         $(".navigation").removeClass("active-violet");
//         $(".navigation").addClass("active-brown");
//     }
//     else {
//         //remove the background property so it comes transparent again (defined in your css)
//         $(".navigation").removeClass("active-brown");

//     }
// });



// function animated() {

//     let delay = 10,
//         i = 0,
//         startTimer = function () {
//             var elem = document.getElementById('figma','ph'),
//                 top = elem.offsetHeight;
//             if (i < 10) {
//                 console.log("function startTimer " + (i + 1) + " сработал"),
//                     setTimeout(startTimer, delay);

//                 elem.style.top = top + 170 + 'px';
//             }

//             i++;
//         };

//     let timer = setTimeout(startTimer, 3000);
    // alert("Hello world");

    // clearTimeout(timer);
// }

// animated();
// function getOffsetSum(elem) {
//     var top=20, left=20
//     var elem = document.getElementById('figma');
//     while(elem) {
//         top = top + parseInt(elem.offsetTop)
//         left = left + parseInt(elem.offsetLeft)
//         elem = elem.offsetParent

//     }
//     elem.style.top = top + -1890 + 'px';
//     return {top: top + 20 + 'px', top, left}
// }
// getOffsetSum();