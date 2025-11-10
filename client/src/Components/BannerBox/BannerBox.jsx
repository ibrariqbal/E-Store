import React from 'react'
import { Link } from 'react-router-dom'
export default function BannerBox(props) {
  return (
     <>
       <div className='box bannerBox overflow-hidden transition-all rounded-lg hover:scale-110 hover:rotate-1 '>
        <Link to='/'>
        <img className='w-full h-[190px]' src={props.img} alt=""/>
        </Link>
       </div>
     </>
  )
}
