import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
 import { Navigation, Autoplay } from 'swiper/modules';
import SmartTablet from '../../assets/Images/HomeSlider-Images/smarttablet.jpeg'
import LeatherWatch from '../../assets/Images/HomeSlider-Images/leatherwatch.png'
import Rollingdiamond from '../../assets/Images/HomeSlider-Images/Rollingdiamond.jpg'
import Electronics from '../../assets/Images/HomeSlider-Images/Electronics.jpeg'
import Purse from '../../assets/Images/HomeSlider-Images/Purse.jpeg'
import Furniture from '../../assets/Images/HomeSlider-Images/furniture.png'
import Comsetics from '../../assets/Images/HomeSlider-Images/Cosmetics.png'
import Sunglasses from '../../assets/Images/HomeSlider-Images/sunglasses.png'
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
export default function CategorySlider() {
  return (
    <>
    <div className='homeSlider pt-4 py-8'>
      <div className='container'>
       <Swiper 

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

       navigation={true}  
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Link to='/smart-tablet'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={SmartTablet} alt=""/>
                <h3 className='text-center font-[500] mt-4'>Smart Tablet</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/leather-watch'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={LeatherWatch} alt=""/>
                <h3 className='text-center font-[500] mt-4'>Leather Watch</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/rolling-diamond'>
            <div className='item w-full bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Rollingdiamond} alt=""/>
                <h3 className='text-center font-[500] mt-4'>R-Diamond</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/electronics'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Electronics} alt=""/>
                <h3 className='text-center font-[500] mt-4'>Electronics</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/purse'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Purse} alt=""/>
                <h3 className='text-center font-[500] mt-4'>Purse</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/furniture'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Furniture} alt=""/>
                <h3 className='text-center font-[500] mt-5'>Furniture</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/comsetics'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Comsetics} alt=""/>
                <h3 className='text-center font-[500] mt-5'>Comsetics</h3>
            </div></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/sunglasses'>
            <div className='item bg-white mt-5 py-8 px-6 rounded-sm flex items-center flex-col'>
                <img className='h-[80px] w-full object-contain' src={Sunglasses} alt=""/>
                <h3 className='text-center font-[500] mt-5'>Sunglasses</h3>
            </div></Link>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}
