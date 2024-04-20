import React from 'react';
import h2 from '../assets/h2.png';
import Wave from '../assets/wave.png'


const Services = () => {
  
  return (
    <div className="parent h-[55vh] bg-white top-[-5rem] relative"
      
       
    
    >
      {/* <div className="wave h-[50vh]"  style={{
          backgroundImage: `url(${Wave})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(180deg)',
             
              
              
              
      }}>

      </div> */}
      <div
      className='relative h-[50vh]  bg-white mb-[7rem] ' id='services'
      style={{
        backgroundImage: `url(${h2})`,
        backgroundSize: 'auto 115%', // Adjusted background size to fit container height and maintain image aspect ratio
        backgroundPosition: 'left', // Centered background position
        backgroundRepeat: 'no-repeat',
      
      }}
    >
      <div className="absolute ">
        <h2 className=' font-sans text-[#459802]  ' id='t1' style={{ 
        paddingLeft:'28rem',
        paddingTop:'2rem',
        fontSize:'6rem',
         
        WebkitTextStroke: '1px white ',
    }}
         >Running towards ,</h2>
        <h2 className='text-black '
         style={
            {
                fontFamily:'samarkan',
                paddingLeft:'47rem',
                fontSize:'4rem'
            }
         }>Sustainable Solutions</h2>
         <h4 className='font-sans text-2xl tracking-wider font-extralight' style={{
            paddingLeft:'48rem',
          
            
         }}> "Unveiling microbial-driven plastic  biodegradation </h4>
         <h4  className='font-sans text-3xl tracking-wider font-extralight' style={{
            paddingLeft:'62rem',
            
         }}> And Bio-fuel Production"</h4>
         <button className='hover:bg-[#38B876] border-1 border-black rounded-pill font-sans transition ease-in-out duration-300 hover:text-white hover:-translate-0.7 hover:scale-105 tracking-widest'
         style={{
            marginLeft:'60rem',
            marginTop:'1rem',
            width:'20rem',
            height:'3rem'
         }}
         >Learn more</button>
      </div>
    </div>
    </div>
  );
};

export default Services;
