import React from 'react';
import fb from '../assets/icons/facebook.png';
import x from '../assets/icons/twitter.png';
import lkd from '../assets/icons/linkedin.png';
import login from '../assets/icons/login.png';
import '../components/style.css';
import { Link } from 'react-router-dom'

import 'tailwindcss/tailwind.css';


const Navbar = () => {
  return (
    <div className=' border  bg-white fixed z-10 w-full flex justify-around items-center p-1 font-sans shadow'  >
      <div className=" text-xl ">
        <h6 style={{
          fontFamily: 'samarkan',
          fontSize: '2.5rem',
          color: '#000', // Change color to black
          textShadow: 'none' // Remove text shadow
        }} >Bio <span className='font-sans tracking-tighter' style={{ color: 'red',
        marginLeft:'-1rem' }}>fuel</span></h6>

      </div>
      <div className="pt-2 w-auto">
        <ul className='flex items-center space-x-12 text-xl ml-5 font-semibold tracking-widest ' >
        <Link className=' text-black text-decoration-none' to='/'> 
        
        <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]' >Home</li>
        </Link> 
          <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]' >Services</li>
          <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]'>About Us</li>
          <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]' >Contact Us</li>
        </ul>
      </div>
      <div className=" flex space-x-12">
        <div className='flex space-x-3 items-center'>
          <button><img src={fb} alt="" style={{ height: '2.5rem' }} /></button>
          <button><img src={x} alt="" style={{ height: '2.5rem' }} /></button>
          <button><img src={lkd} alt="" style={{ height: '2.5rem' }} /></button>
        </div>
        <div className='flex items-center'>
          <Link to='/form'>

            <button><img src={login} alt="" style={{ height: '2.7rem',paddingTop:'2.5px' }} /></button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;
