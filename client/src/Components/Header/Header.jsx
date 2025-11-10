import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/logo.jpg'
import '../../index.css'
import Search from '../Search/Search'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { MdShoppingCart } from "react-icons/md"
import { IoMdGitCompare } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa6"
import Navbar from '../Navigation/Navbar'
import { useSelector } from 'react-redux'

export default function Header() {

  const cartItems = useSelector((state) => state.cart.items)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // ✅ Custom badge styling
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }))

  return (
    <>
      <header className='bg-white'>
        {/* 🔹 Top strip */}
        <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'>
          <div className='container'>
            <div className='flex items-center justify-between'>
              <div className='w-[50%]'>
                <p className='text-[12px] font-[500]'>
                  Get up to 50% off new season styles — limited time only!
                </p>
              </div>

              <div className='w-[50%] flex items-center justify-end'>
                <ul className='flex items-center gap-3'>
                  <li>
                    <Link to='/help-center' className='text-[13px] font-[500] hover:text-red-500'>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to='/order-tracking' className='text-[13px] font-[500] hover:text-red-500'>
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Middle section */}
        <div className='header py-4 border-gray-250 border-b-[1px]'>
          <div className='container flex justify-between items-center'>
            {/* 🔸 Logo */}
            <div className='w-[25%]'>
              <Link to='/'><img src={Logo} alt="Logo" className='w-[190px]' /></Link>
            </div>

            {/* 🔸 Search bar */}
            <div className='w-[45%]'>
              <Search />
            </div>

            {/* 🔸 Icons & Login */}
            <div className='w-[30%] flex items-center justify-end'>
              <ul className='flex items-center gap-3'>
                <li>
                  <Link className='text-[15px] font-[500]' to='/login'>Login</Link> |&nbsp;
                  <Link className='text-[15px] font-[500]' to='/signupform'>Register</Link>
                </li>

                {/* Compare */}
                <li>
                  <Tooltip title="Compare">
                    <IconButton>
                      <StyledBadge badgeContent={2} color="secondary">
                        <IoMdGitCompare size={20} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* Wishlist */}
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton>
                      <StyledBadge badgeContent={3} color="secondary">
                        <FaRegHeart size={18} />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                {/* 🛒 Cart */}
                <li>
                  <Tooltip title="Cart">
                    <Link to="/addtocart">
                      <IconButton>
                        <StyledBadge badgeContent={cartCount} color="error">
                          <MdShoppingCart size={22} />
                        </StyledBadge>
                      </IconButton>
                    </Link>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 🔹 Navigation bar */}
        <Navbar />
      </header>
    </>
  )
}
