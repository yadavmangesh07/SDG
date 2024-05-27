import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
const Footer = () => {
  return (
    <div className='h-[50vh] flex  justify-center flex-col p-[4.5rem] bg-[#3B4653] relative top-[35.5rem] w-[100%] '>
        <div className="child  flex justify-around  -2 -red-500 p-1 ">
            <div className='-1 -red-400 w-[30%] h-[100%]'>
            <h6 style={{
          fontFamily: 'samarkan',
          fontSize: '2.5rem',
          color: 'white', // Change color to black
          textShadow: 'none' // Remove text shadow
        }} >Bio <span className='font-sans tracking-tighter' style={{ color: 'red',
        marginLeft:'-1rem',WebkitTextStroke: '.5px black', }}>fuel</span></h6>
        <div>
            <p className='font-light tracking-widest font-sans text-white'>Amidst the quest for a sustainable energy future, biofuel emerges as a promising solution, offering a path towards universal satisfaction</p>
        </div>
            </div>
            <div className=' tracking-widest -1 font-sans -red-400 w-[30%] h-[100%] text-white pt-2 '>
                
            <h3>CONTACT US</h3>
            <div className='flex justify-start align-middle mt-3'>
            <div><FontAwesomeIcon icon={faHouse} /></div>
            <p className='font-light tracking-widest font-sans pl-5'>Greater Noida</p>
            </div>
            <div className='flex justify-start align-middle'>
            <div><FontAwesomeIcon icon={faEnvelope} /></div>
            <p className='font-light tracking-widest font-sans pl-5'>mangeshyadav8736@gmail.com</p>
            </div>
            <div className='flex justify-start align-middle'>
            <div><FontAwesomeIcon icon={faPhone} /></div>
            <p className='font-light tracking-widest font-sans pl-5'>+91 8299833178</p>
            </div>
            
            
            </div>
            <div className='-1 tracking-widest font-sans text-white -red-400 w-[30%] h-[100%] pt-2'>
                <h3 >NEWSLETTER</h3>
                <p>Subscribe to receive latest news letters from us</p>
                <form action="" className='p-2'>
                    <input type="text" className='form-control p-2 mb-2 ' placeholder='Email Address' />
                    <button type="submit" className=" w-full bg-[#3BB375] hover:bg-white hover:text-black  mb-3 h-11 rounded">Subscribe</button>
                </form>
            </div>
        </div>
        {/* <div className="child -2 -red-500 p-[3rem] "></div> */}
        
      
    </div>
  )
}
 
export default Footer
