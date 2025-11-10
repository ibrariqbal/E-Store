import React from 'react'
import './Search.css'
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";
export default function Search() {
  return (
    <>
      <div className='searchbox width-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
      <input className=' px-3 w-[100%] h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' type="text" placeholder='Search for the products...'/>
      <Button className='!absolute top-[5px] right-[8px] z-50 h-[37px] w-[37px] !rounded-full !min-w-[37px] !text-black'>
      <IoSearchSharp className='text-[#504e4e] text-[22px]' />

      </Button>

      </div>
    </>
  )
}
