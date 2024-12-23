import {Embla} from "./components/embla/index.js";

function initMobileMenu() {
    const menuNode = document.querySelector( "#menu" );
    if (!menuNode) return;

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

// function initSwiper() {
//     const swiperNode = document.querySelector('.swiper');
//     if (!swiperNode) return;
//
//     new Swiper('.swiper', {
//         modules: [SwiperNav, SwiperPag, SwiperAutoPlay, SwiperEffectFade],
//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//         },
//         autoplay: {
//             enable: false,
//             delay: 3000,
//         },
//         loop: true,
//         effect: 'fade',
//         speed: 1500,
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//
//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });
// }

// function handleSubscribe() {
//     const subscribeNode = document.querySelector('.subscribe');
//     if (!subscribeNode) return;
//     const subscribeFormNode = subscribeNode.querySelector('form');
//     if (!subscribeNode) return;
//
//     const subscribeCheckboxNode = subscribeNode.querySelector('.subscribe-checkbox');
//     const subscribeButtonNode = subscribeNode.querySelector('.subscribe-button');
//     subscribeCheckboxNode.addEventListener('change', function(evnt) {
//         subscribeButtonNode.disabled = !this.checked;
//     });
//     subscribeFormNode.addEventListener('submit', function(evnt) {
//         evnt.preventDefault();
//         const csrf = subscribeFormNode.querySelector('input[name="csrfmiddlewaretoken"]').value;
//         const email = subscribeFormNode.querySelector('input[type="email"]').value;
//         const formData = new FormData();
//         formData.append('email', email);
//         formData.append('csrfmiddlewaretoken', csrf);
//
//         fetch(this.action, {
//             method: 'POST',
//             credentials: 'same-origin',
//             body: formData,
//         }).then(() => {
//         }).catch(err => console.log(err));
//     });
// }

function initMainSlider() {
    const OPTIONS = { align: 'start', loop: true };
    const plugins = [
        EmblaAutoplay({stopOnMouseEnter: true, stopOnInteraction: false,}),
    ];
    new Embla('main-slider', OPTIONS, true, plugins);
}

function initNews() {
    const OPTIONS = { align: 'start', loop: true };
    new Embla('embla', OPTIONS, true);
}

function scrollToElem(fromElemNode) {
    if (!fromElemNode) return;

    const hrefId = fromElemNode.getAttribute("data-href");

    const targetNode = document.querySelector(hrefId);
    if (!targetNode) return;
    const elemTop = targetNode.getBoundingClientRect().y + window.scrollY - 70;
    window.scrollTo({top: elemTop, behavior: 'smooth'});
    // console.log(targetNode)
    // targetNode.scrollIntoView({
    //     block: 'start',
    //     behavior: 'smooth',
    // })
}

function handleTableNav() {
    const navNode = document.querySelector( ".custom-scroll" );
    if (!navNode) return;

    const listNavItemNode = navNode.querySelectorAll( ".inside-page__nav__item" );
    let activeNavItemNode = navNode.querySelector( ".active" );

    [].forEach.call(listNavItemNode, function(navItem) {
        navItem.addEventListener("click", function(e) {
            // if (navItem === activeNavItemNode) return;
            e.preventDefault();
            // remove active class for prev
            activeNavItemNode.classList.remove("active");
            activeNavItemNode = navItem;
            // add active for current
            navItem.classList.add("active");

            // go to clicked elem
            const clickedHrefNode = navItem.querySelector('[data-href]');
            scrollToElem(clickedHrefNode);
        });
    });
}


function ready() {
    initMobileMenu();
    initMainSlider();
    initNews();
    handleTableNav();
}


document.addEventListener("DOMContentLoaded", ready);