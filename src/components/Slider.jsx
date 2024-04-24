import React from 'react';
import forest from '../assets/forest.jpg';
import vision from '../assets/image.jpg'
import impact from '../assets/impact.jpg'
import mission from '../assets/mission.jpg'
import log from '../assets/logs.jpg'
import nir from '../assets/NIR.mp4'

const Slider = () => {
  return (
    <div className="parent h-[100vh] w-[100%] relative   "

    >
      {/* Image background */}
      <div
        className=' h-[100%] w-[100%] fixed top-0 left-0'
        style={{
          backgroundImage: `url(${forest})`,
          backgroundSize: 'cover',
          zIndex: '-1', // Set a lower z-index for the image div

        }}
      ></div>


      {/* Scrolling content */}
      <div className=' absolute top-[20%]  w-full'>
        <h1 className='text-center tracking-wider' style={{
          fontFamily: 'samarkan',
          fontSize: '7rem',
          color: 'white',
          WebkitTextStroke: '1px black'
        }}>Fueling sustainability</h1>
        <h1 className='text-center font-sans mt-[-2rem] text-white tracking-wider'>Converting plastic into power.</h1>
      </div>
      <div className=' flex flex-col justify-center bg-black absolute   top-[70%] w-full h-[50vh] '
        style={{
          backgroundImage: `url(${log})`,
          backgroundSize: 'cover',
          zIndex: '-1'



        }}
      >

        <div className='flex  justify-center ' style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // White background with 50% opacity
          width: '100%',
          height: '100%'
        }}>
          <div className=' flex flex-col h-[55vh] m-2.5  w-[26vw] relative top-[-13rem]  '>
            <div className='h-[auto]  p-[1.2rem] text-white tracking-wider bg-[#38B876]'>
              <h3 className='tracking-widest'>Vision</h3>
              <p className='font-extralight'>We envision a world empowered by innovation and eco-leadership, driving sustainability and environmental stewardship for future generations.</p>
            </div>
            <div className=' w-[full] h-[58%]' style={{
              backgroundImage: `url(${vision})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>

            </div>
          </div>
          <div className='h-[55vh] m-2.5  w-[26vw] relative top-[-13rem] '>
            <div className='h-[auto]  text-white p-[1.2rem] tracking-wider bg-[#38B876]'>
              <h3 className='tracking-widest '>Mission</h3>
              <p className='font-extralight'>Our mission is to utilize micro bacterial biodegradation, converting plastic waste into renewable energy for a cleaner, greener planet.</p>
            </div>
            <div className=' w-[full] h-[58%] '
              style={{
                backgroundImage: `url(${mission})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

            </div>

          </div>
          <div className='h-[55vh] m-2.5 w-[26vw] relative top-[-13rem] '>
            <div className='h-[auto]  text-white p-[1.2rem] tracking-wider bg-[#38B876]'>
              <h3 className='tracking-widest'>Impact</h3>
              <p className='font-extralight'>Through our efforts, we transform waste into opportunity, safeguarding the environment and shaping a sustainable future for all.</p>
            </div>
            <div className=' w-[full] h-[58%] ' style={{
              backgroundImage: `url(${impact})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

            }}>

            </div>

          </div>

        </div>
        <div className="vidsec flex   absolute   mt-[46rem] w-100 bg-white   h-[30rem]">
          <div className='   pt-[1rem] ml-[1rem] '>
          <video autoPlay loop muted className="video-background  h-[100%] ">
                    <source src={nir} className='w-50' type="video/mp4"  />
                    
                </video>
          </div>
          <div className='bg-white  w-[45%] ml-[4rem] mt-[2rem] mr-[2rem] mb-[2rem] pt-[4rem]  tracking-widest '>
            <p className='font-sans tracking-widest font-light' style={{fontSize:'1.5rem'}}>          For distinguishing plastic we are using a sensor that is NIR spectrometer which is already available in the market. It’s working depends on detecting the wavelength of different types of plastic. It is a mini model which can be implemented at large scale according to our need.
</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
