
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoIosClose } from "react-icons/io";
import { Button, Link } from '@mui/material';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import '../Search/Search.css';

export default function Categorypannel({ isopen, toggleDrawer }) {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null);  
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box className="categorypanel" sx={{ width: 250 }} role="presentation">
      <h3 className='p-4 mt-2 mb-2 text-[16px] flex items-center justify-between border-b-[1px] font-bold'>
        Shop By Categories
        <IoIosClose
          onClick={() => toggleDrawer(false)}
          className='transition cursor-pointer text-[20px]'
        />
      </h3>

      <div className="scroll">
        <ul className='w-full'>

          {/* ========== FASHION ========== */}
          <li className='list-none px-3 flex flex-col relative'>
            <div className='w-full flex items-center justify-between'>
              <Link className='w-full' to='/fashion'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                  Fashion
                </Button>
              </Link>

              {submenuIndex === 0 ? (
                <FiMinusSquare
                  className='text-[18px] cursor-pointer'
                  onClick={(e) => { e.stopPropagation(); openSubmenu(0); }}
                />
              ) : (
                <FaRegSquarePlus
                  className='text-[18px] cursor-pointer'
                  onClick={(e) => { e.stopPropagation(); openSubmenu(0); }}
                />
              )}
            </div>

            {submenuIndex === 0 && (
              <ul className='submenu w-full pl-5'>
                <li className='list-none relative'>
                  <div className='w-full flex items-center justify-between'>
                    <Link className='w-full' to='/apparel'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                        Apparel
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 0 ? (
                      <FiMinusSquare
                        className='text-[18px] cursor-pointer'
                        onClick={(e) => { e.stopPropagation(); openInnerSubmenu(0); }}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className='text-[18px] cursor-pointer'
                        onClick={(e) => { e.stopPropagation(); openInnerSubmenu(0); }}
                      />
                    )}
                  </div>

                  {innerSubmenuIndex === 0 && (
                    <ul className='inner_submenu w-full pl-5'>
                      <li><Link to='/smart-tablet' className='text-[14px] block py-1 !text-black'>Smart Tablet</Link></li>
                      <li><Link to='/crape-tshirt' className='text-[14px] block py-1 !text-black'>Crape T-shirt</Link></li>
                      <li><Link to='/leather-watch' className='text-[14px] block py-1 !text-black'>Leather Watch</Link></li>
                      <li><Link to='/rolling-diamond' className='text-[14px] block py-1 !text-black'>Rolling Diamond</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

           <div className='px-3'>
             <Link className='w-full' to='/fashion'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Jewelery
                </Button>
              </Link>
              <Link className='w-full' to='/fashion'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Watches
                </Button>
              </Link>
              </div>

          {/* ========== OUTWEAR ========== */}
          <li className='list-none px-3 flex flex-col relative'>
            <div className='w-full flex items-center justify-between'>
              <Link className='w-full' to='/outwear'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                  Outwear
                </Button>
              </Link>

              {submenuIndex === 1 ? (
                <FiMinusSquare
                  className='text-[18px] cursor-pointer'
                  onClick={(e) => { e.stopPropagation(); openSubmenu(1); }}
                />
              ) : (
                <FaRegSquarePlus
                  className='text-[18px] cursor-pointer'
                  onClick={(e) => { e.stopPropagation(); openSubmenu(1); }}
                />
              )}
            </div>

            {submenuIndex === 1 && (
              <ul className='submenu w-full pl-5'>
                <li className='list-none relative'>
                  <div className='w-full flex items-center justify-between'>
                    <Link className='w-full' to='/jackets'>
                      <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                        Jackets
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 1 ? (
                      <FiMinusSquare
                        className='text-[18px] cursor-pointer'
                        onClick={(e) => { e.stopPropagation(); openInnerSubmenu(1); }}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className='text-[18px] cursor-pointer'
                        onClick={(e) => { e.stopPropagation(); openInnerSubmenu(1); }}
                      />
                    )}
                  </div>

                  {innerSubmenuIndex === 1 && (
                    <ul className='inner_submenu w-full pl-5'>
                      <li><Link to='/denim-jacket' className='text-[14px] block py-1 !text-black'>Denim Jacket</Link></li>
                      <li><Link to='/leather-jacket' className='text-[14px] block py-1 !text-black'>Leather Jacket</Link></li>
                      <li><Link to='/bomber-jacket' className='text-[14px] block py-1 !text-black'>Bomber Jacket</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
            <div className='px-3'>
             <Link className='w-full' to='/cosmetics'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Cosmetics
                </Button>
              </Link>
                   <Link className='w-full' to='/accessories'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Accessories
                </Button>
              </Link>
      
          <Link className='w-full' to='/electronics'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Electronics
                </Button>
              </Link>
                  <Link className='w-full' to='/furniture'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Furniture
                </Button>
              </Link>
                  <Link className='w-full' to='/sunglasses'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Sunglasses
                </Button>
              </Link>
                  <Link className='w-full' to='/rolling-diamond'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Rolling Diamond
                </Button>
              </Link>
                  <Link className='w-full' to='/xbox-controller'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 X-box Controller
                </Button>
              </Link>
                  <Link className='w-full' to='lLeather-watch'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Leather Watch
                </Button>
              </Link>
                  <Link className='w-full' to='/smart-tablet'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Smart Tablet
                </Button>
              </Link>
                  <Link className='w-full' to='/purse'>
                <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                 Purese
                </Button>
              </Link>
              </div>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer
        anchor="left"
        open={isopen}
        onClose={() => toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
