import {addPrevNextBtnsClickHandlers} from "./EmblaCarouselArrowButtons.js";
import {addDotBtnsAndClickHandlers} from "./EmblaCarouselDotButton.js";

export class Embla {
    constructor(emblaClassName, options, hasDots) {
        this.emblaNode = document.querySelector(`.${emblaClassName}`);
        this.OPTIONS = options;
        this.hasDots = hasDots;
        this.initEmbla();
    }
    initEmbla() {
        if (!this.emblaNode) return;

        const viewportNode = this.emblaNode.querySelector('.embla__viewport');
        const prevBtnNode = this.emblaNode.querySelector('.embla__button--prev');
        const nextBtnNode = this.emblaNode.querySelector('.embla__button--next');

        const emblaApi = EmblaCarousel(viewportNode, this.OPTIONS);

        if (this.hasDots) {
            const dotsNode = this.emblaNode.querySelector('.embla__dots');

            const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
                emblaApi,
                dotsNode,
            );
            emblaApi.on('destroy', removeDotBtnsAndClickHandlers);
        }

        const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
            emblaApi,
            prevBtnNode,
            nextBtnNode,
        );
        emblaApi.on('destroy', removePrevNextBtnsClickHandlers);

    }
}