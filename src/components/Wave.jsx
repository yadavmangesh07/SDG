import React from 'react'
import wave from '../assets/wave.png'

const Wave = () => {
  return (
    <div className='top-[10rem] relative'>
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
