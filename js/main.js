// Data Aos

AOS.init();

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Mobile Menu Bar

$(document).ready(function () {
    $('.bar-btn').click(function () {
        $('.mobile-menu').toggleClass('menu-show');
    })

    $('.close-btn').click(function () {
        $('.mobile-menu').removeClass('menu-show');
    })
})

//Trends Card slider

var swiper = new Swiper(".cardSwiper", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Premium Card slider

var swiper = new Swiper(".cards-2", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});
// Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 500;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


