import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoRocketSharp } from "react-icons/io5";
import Categorypannel from '../CategoryPannel/Categorypannel';
import './Navbar.css'
export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <nav className='py-2'>
        <div className='container flex items-center justify-end gap-8'>
          <div className='col1 w-[20%]'>
            <Button className='!text-black gap-2 w-full' onClick={toggleDrawer} >
              <RiMenu2Fill className='text-[18px]' />
              Shop By Categories
              <LiaAngleDownSolid className='text-[14px] font-bold ml-auto' />
            </Button>
          </div>

          <div className='col2 w-[60%]'>
            <ul className='flex gap-5 items-center nav'>
              <li><Link to='/home'><Button className='link transition font-[500]'>Home</Button></Link></li>
              <li className='relative'><Link to='/fashion'><Button className='link transition font-[500] hover:opacity-[1] visible'>Fashion</Button></Link>
            
            
              <div className='submenu bg-white absolute top-[120%] left-[0%] min-w-[150px] shadow-md opacity-0 transition-all '>
                <ul>
               <li className='list-none relative'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>Men</Link></Button>
                 
                 
                 {/* Men section */}
              
                <div className='submenu bg-white absolute top-[0%] left-[100%] min-w-[150px] shadow-md opacity-0 transition-all '>
                <ul>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>T-shirt</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                 <Link to='/men' className='w-full'>Jeans</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>Footwear</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>Watch</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                  <Link to='/men' className='w-full'>Pents</Link></Button></li>               
                </ul>
              </div>
                
                </li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                 <Link to='/men' className='w-full'>Women</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>Kids</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                <Link to='/men' className='w-full'>Girls</Link></Button></li>
               <li className='list-none'><Button className='text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>
                  <Link to='/men' className='w-full'>Boys</Link></Button></li>               
                </ul>
              </div>
              </li>
              <li><Link to='/electronics'><Button className='link transition font-[500]'>Electronics</Button></Link></li>
              <li><Link to='/bags'><Button className='link transition font-[500]'>Bags</Button></Link></li>
              <li><Link to='/footwear'><Button className='link transition font-[500]'>Footwear</Button></Link></li>
              <li><Link to='/groceries'><Button className='link transition font-[500]'>Groceries</Button></Link></li>
              <li><Link to='/beauty'><Button className='link transition font-[500]'>Beauty</Button></Link></li>
              <li><Link to='/wellness'><Button className='link transition font-[500]'>Wellness</Button></Link></li>
              <li><Link to='/jewelery'><Button className='link transition font-[500]'>Jewelery</Button></Link></li>
            </ul>
          </div>

          <div className='col3 w-[20%]'>
            <p className='text-[14px] font-[500] flex items-center gap-3 mt-0 mb-0'>
              <IoRocketSharp className='text-[18px]' />Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <Categorypannel isopen={isopen} toggleDrawer={toggleDrawer} />
    </>
  );
}
