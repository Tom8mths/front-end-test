import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../ProductCard';
import {Navigation, A11y} from 'swiper';

export default function ProductCarousel({items}) {
  const {products} = items;

  return (
    <Swiper
      spaceBetween={30}
      modules={[Navigation, A11y]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      autoplay={true}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1024: {
          width: 1024,
          slidesPerView: 3,
        },
        1440: {
          width: 1440,
          slidesPerView: 4,
        },
      }}
    >
      {products &&
        products.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <ProductCard item={item}></ProductCard>
            </SwiperSlide>
          );
        })}
      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </Swiper>
  );
}
