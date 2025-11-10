import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function FetchItem({ img, index, discount }) {
  const badgeColors = ['bg-primary']

  return (
    <div className="relative group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={img}
        alt="product"
        className="w-full h-[180px] object-contain transition-transform duration-500 hover:scale-110 p-2"
      />

      {discount ? (
        <span
          className={`absolute top-[10px] left-[10px] ${badgeColors[index % badgeColors.length]} text-white text-[12px] font-semibold px-2 py-1 rounded-md shadow-md`}
        >
          -{discount}%
        </span>
      ) : null}
          
          <div className="actions absolute top-[-150px] right-[10px] flex flex-col items-center gap-2 w-[60px] transition-all duration-300 group-hover:top-[10px]">
  <Link to="/addtocart">
    <Button
      className="!w-[35px] !h-[35px] rounded-full !bg-white !text-black shadow-md
      hover:!bg-primary hover:!text-white transition-all duration-200"
    >
      <IoMdCart className="text-[18px]" />
    </Button>
  </Link>

  <Link to="/addtocart">
    <Button
      className="!w-[35px] !h-[35px] rounded-full !bg-white !text-black shadow-md
      hover:!bg-primary hover:!text-white transition-all duration-200"
    >
      <FaCodeCompare className="text-[18px]" />
    </Button>
  </Link>

  <Link to="/addtocart">
    <Button
      className="!w-[35px] !h-[35px] rounded-full !bg-white !text-black shadow-md
      hover:!bg-primary hover:!text-white transition-all duration-200"
    >
      <CiHeart className="text-[18px]" />
    </Button>
  </Link>
</div>
</div>
  )
}
