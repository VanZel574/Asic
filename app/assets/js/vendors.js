import MmenuLight from 'mmenu-light';
import AOS from "aos";
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';


AOS.init({
    once: true,
    duration: 500,
    easing: 'ease-in-cubic',
    anchorPlacement: 'top-bottom',
    disable: 'phone',
});
window.MmenuLight  = MmenuLight;
window.EmblaCarousel = EmblaCarousel;
window.EmblaAutoplay = Autoplay;