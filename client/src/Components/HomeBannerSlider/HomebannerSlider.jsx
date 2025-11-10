import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import BannerBox from '../BannerBox/BannerBox';
import HomeBanner1 from '../../assets/Images/HomebannerSlider/HomeSlider1.jpg'
import HomeBanner2 from '../../assets/Images/HomebannerSlider/HomeSlider2.jpg'
import HomeBanner3 from '../../assets/Images/HomebannerSlider/HomeSlider3.jpg'
import HomeBanner4 from '../../assets/Images/HomebannerSlider/HomeSlider4.jpg'

export default function HomebannerSlider(props) {
    return (
    <>
     
        <section className='container bg-white py-5 w-full homeSlider'>
        <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

       navigation={true}  
        slidesPerView={props.item}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
           <BannerBox img={HomeBanner1} Link='/'/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={HomeBanner2} Link='/'/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={HomeBanner3} Link='/'/>
        </SwiperSlide>
        <SwiperSlide>
           <BannerBox img={HomeBanner4} Link='/'/>
        </SwiperSlide>
        </Swiper>
         </section>
         
    </>
  )
}
