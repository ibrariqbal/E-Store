import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='flex'>
      <div className=''>
        <div className='border p-3  m-6 black w-[18vw]' >

        <h1 className='font-bold text-2xl'>Contact us</h1>
        <p className='mt-4'>ClassyShop - Mega Super Store <br /> 507-Union Trade Center France</p>

        <p className='mt-6 text-sm'>ibrariqbal93@gmail.com</p>

        <h1 className='mt-3 text-red-600'>(+92) 3238804157</h1>

        <div className='flex mt-5'>
            <FaRegMessage size={62}/>
            <p className='pl-3'>Online Chat <br />Get Expert Help</p>
        </div>
      </div>
        </div>

      <div className=''>
        <div className='p-3 m-6 w-[16vw]' >

          <h1 className='font-bold text-2xl'>Products</h1>
         
        <div className='border mt-4 '>
            <Link to="/" className='hover:text-primary' >Prices drop</Link>
        </div>
        <div className='mt-1'>

            <Link to="/" className='hover:text-primary'>New products</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/" className='hover:text-primary'>Best Sales</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/" className='hover:text-primary'>Contact us</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/" className='hover:text-primary'>Siternap</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/" className='hover:text-primary'>Stores</Link><br />
        </div>
        </div>
      </div>


      <div className=''>
        <div className='p-3 m-6 w-[16vw]' >

          <h1 className='font-bold text-2xl'>Our Company</h1>
         
        <div className='border mt-4'>
            <Link to="/Delivary" className='hover:text-primary'>Delivary</Link>
        </div>
        <div className='mt-1'>

            <Link to="/LegalNotice" className='hover:text-primary'>Legal Notice</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/Termsandconditionsofuse" className='hover:text-primary'>Terms and conditions of use</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/Aboutus" className='hover:text-primary'>About us</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/SecurePayement" className='hover:text-primary'>Secure Payement</Link><br />
        </div>
        <div className='mt-1'>

            <Link to="/Login" className='hover:text-primary'>Login</Link>
        </div>
        </div>
        </div>


      <div className=''>
        <div className='p-3 m-6 w-[34.5vw]' >

          <h1 className='font-bold text-2xl '>Subscribe to News letter</h1>
         
         <p className='mt-6'>Subsccribe to our latest newletters to get news about special descounts</p>

        <form action="">
            <input type="email" name="" id="" placeholder='Your Email Address' className='p-3 mt-8 w-[30.5vw] '/>
        </form>

        <input type="submit" value="Subscribe" className='mt-5 border bg-red-500 text-white p-3 rounded-xl font-bold cursor-pointer hover:bg-red-600' />

    <div className='flex mt-4'>
        <input type="checkbox" name="" id="" className='mt-1' />
        <p className='ml-3'>I agree to the terms and conditions and the privacy policy</p>
    </div >

        </div>



      </div>

    </div>
  )
}

export default Footer