import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import Banner1 from '../../assets/Images/Banner1.jpg'
import Banner2 from '../../assets/Images/Banner2.jpg'
import Banner3 from '../../assets/Images/Banner3.jpg'
import Banner4 from '../../assets/Images/Banner4.jpg'
export default function HomeSlider() {
  return (
    <>
   <div className='homeSliders'>
    <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide><img className='w-full  rounded-lg' src={Banner1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='w-full rounded-lg' src={Banner2} alt=""/></SwiperSlide>
        <SwiperSlide><img className='w-full rounded-lg' src={Banner3} alt=""/></SwiperSlide>
        <SwiperSlide><img className='w-full rounded-lg' src={Banner4} alt=""/></SwiperSlide>
      </Swiper>
 </div>
     </>
  )
}
