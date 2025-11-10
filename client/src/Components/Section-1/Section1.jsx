import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import HomebannerSlider from '../HomeBannerSlider/HomebannerSlider';

export default function Section1() {
  return (
     <>
     
        <section className='py-16 bg-white'>
           <div className='container m-auto max-w-[80%]'>
              <div className='free shipping w-ful py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between
              rounded-md mb-7'>
               <div className='col-1 flex items-center gap-4 '>
                <FaShippingFast className='text-[50px]' />
                <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
               </div>
               <div className='col-2 '>
                <p className='mb-0 font-[500]'>Free Delivery Now on Your First Order and over $300</p>
               </div>
               <div className='col_3 '>
                 <p className='font-bold text-[25px]'>- Only $300</p>
               </div>
              </div>
           </div>
           <HomebannerSlider item={3}/>
        </section>

     </>
  )
}
