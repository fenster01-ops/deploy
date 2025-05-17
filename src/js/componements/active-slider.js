import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useActiveSlider = () => {
  new Swiper('.active__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  });
};