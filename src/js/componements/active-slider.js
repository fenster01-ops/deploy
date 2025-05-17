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
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.clause__btn--prev',
      nextEl: '.clause__btn--next',
    },
  });
};