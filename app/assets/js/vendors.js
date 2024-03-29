import MmenuLight from 'mmenu-light';
import Swiper from "swiper";
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import AOS from "aos";


AOS.init({
    once: true,
    duration: 500,
    easing: 'ease-in-cubic',
    anchorPlacement: 'top-bottom',
    disable: 'phone',
});
window.Swiper = Swiper;
window.SwiperNav = Navigation;
window.SwiperPag = Pagination;
window.SwiperAutoPlay = Autoplay;
window.SwiperEffectFade = EffectFade;
window.MmenuLight  = MmenuLight;