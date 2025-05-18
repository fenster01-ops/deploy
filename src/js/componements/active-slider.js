import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

export const useActiveSlider = () => {
  new Swiper('.active__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  });
};

export const useClauseSlider = () => {
    new Swiper('.clause__slider', {
        modules: [Navigation, Autoplay],
        slidesPerView: 3,
        spaceBetween: 33,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
        },
        navigation: {
            prevEl: '.clause__btn--prev',
            nextEl: '.clause__btn--next',
        },
    });
};
