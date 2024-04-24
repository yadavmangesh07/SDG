import React from 'react'
import wave from '../assets/wave.png'

const Wave = () => {
  return (
    <div className='top-[-1rem] relative  h-[140vh] text-white'>
      <div className='mt-[4rem] ml-[2rem] relative' >
        <h1 className='font-sans pl-[5rem] ' style={{fontSize:'5rem',WebkitTextStroke: '1px black'}} >Join us in turning <span className='tracking-wider' style={{ fontFamily: 'samarkan',fontSize:'6rem',WebkitTextStroke: '1px black'}}>plastic</span>  </h1>
        <h1 className='mt-[-2.5rem]' style={{paddingLeft:'39rem',fontSize:'4rem',WebkitTextStroke: '1px black',color:'red'}}>Waste into</h1>
        <h1 className='font-[samarkan] pl-[48rem] mt-[-1.5rem] tracking-wider ' style={{fontSize:'6rem',WebkitTextStroke: '1px black'}}>solution</h1>
        <p className='font-sans tracking-widest text-center' style={{fontSize:'2rem',WebkitTextStroke: '.5px black'}}>Contribute and transform our planet's future</p>
        
      </div>
      <button className='absolute z-50 mt-5 bg-white text-black  border-1 border-black rounded-pill font-sans transition ease-in-out duration-300 hover:text-white hover:-translate-0.7 hover:scale-105 tracking-widest'
         style={{
            marginLeft:'60rem',
            marginTop:'1rem',
            width:'20rem',
            height:'3rem'
         }}
         >Contribute</button>
      <div className="wave h-[50vh]   w-100% relative"
        style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',



        }}

      ></div>
      <div className="wave h-[50vh] bg-white  w-100% relative"
        style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)',





        }}

      ></div>
    </div>
  )
}

export default Wave
