
function initMobileMenu() {
    const menu = new MmenuLight(
        document.querySelector( "#menu" ),
        "(max-width: 1200px)"
    );

    const navigator = menu.navigation({
        title: 'Меню'
    });
    const drawer = menu.offcanvas();

    document.querySelector( "#burger" )
        .addEventListener( "click", ( evnt ) => {
            evnt.preventDefault();
            drawer.open();
        });
}

function initSwiper() {
    const swiperNode = document.querySelector('.swiper');
    if (!swiperNode) return;

    new Swiper('.swiper', {
        modules: [SwiperNav, SwiperPag, SwiperAutoPlay, SwiperEffectFade],
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: true,
        loop: true,
        effect: 'fade',

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

function ready() {
    initMobileMenu();
    initSwiper();
}


document.addEventListener("DOMContentLoaded", ready);