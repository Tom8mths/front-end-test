import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../ProductCard';

type ProductCarouselProps = {
  products?: Array;
};

export default function ProductCarousel({products}: ProductCarouselProps) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{clickable: true}}
    >
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard></ProductCard>
      </SwiperSlide>
    </Swiper>
  );
}
