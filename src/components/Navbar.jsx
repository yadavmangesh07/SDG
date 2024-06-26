import React from 'react';
import gt from '../assets/icons/github.png';
import x from '../assets/icons/twitter.png';
import lkd from '../assets/icons/linkedin.png';
import login1 from '../assets/icons/login.png';
import '../components/style.css';
import { Link } from 'react-router-dom'

import 'tailwindcss/tailwind.css';
import Dropdown from './Dropdown';


const Navbar = ({login,setLogin}) => {

  const handleClickLkdn = () => {
    window.open("https://www.linkedin.com/in/mangesh-yadav-65a437237", "_blank");
};
  const handleClickGit = () => {
    window.open("https://github.com/yadavmangesh07", "_blank");
};
  const handleClickX = () => {
    window.open("https://x.com/@__Mangesh", "_blank");
};
  return (
    <div className=' border  bg-white fixed z-20 w-full flex justify-around items-center p-1 font-sans shadow '  >
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
          <Link className=' text-black text-decoration-none' to='/about'> 
          <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]'>About Us</li>
          </Link> 
          <Link className=' text-black text-decoration-none' to='/form'>
          <li className='font-light transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-125 hover:font-semibold hover:text-[#67BD46]' >Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className=" flex space-x-12">
        <div className='flex space-x-3 items-center'>
          <button onClick={handleClickGit}><img src={gt} alt="" style={{ height: '2.5rem' }}  /></button>
          <button onClick={handleClickX}><img src={x} alt="" style={{ height: '2.5rem' }} /></button>
          <button onClick={handleClickLkdn}><img src={lkd} alt="" style={{ height: '2.5rem' }} /></button>
        </div>
        <div className='flex items-center'>
          {login &&             
          <button className='flex'><img src={login1} alt="" style={{ height: '2.7rem',paddingTop:'2.5px' }} /><Dropdown setLogin={setLogin}/></button>
}
       
        
        
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;
