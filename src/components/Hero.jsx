import React from 'react';

import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import Services from './Services';
import Slider from './Slider';
import h1 from '../assets/h1.png'
import Wave from './Wave'



const Hero = () => {
    return (
        <>
        
            <div className="parent flex   justify-around p-[5rem] bg-white bg-opacity-50  " style={{
                height: '100vh',
                backgroundImage: `url(${h1})`,
                        // backgroundSize: 'contain',
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                       
                       
                       
                        opacity:'1'
            }}>
                <div className="parent mt-[2rem]  ">
                    <h6 style={{
                        fontFamily: 'samarkan',
                        fontSize: '5rem',
                        color: 'black', // Change color to black
                        textShadow: 'none', // Remove text shadow
                        padding: '0', // Remove padding
                        WebkitTextStroke: '1.5px black',
                    }}>Transform</h6>
                    <h3 className='font-sans' style={{
                        fontSize: '3.5rem',
                        margin: '0', // Remove margin
                        padding: '0 10.4rem', // Adjust padding,
                        marginTop: '-2.5rem',
                        color: 'red',
                        WebkitTextStroke: '1px black',

                    }}>Trash into </h3>
                    <h6 style={{
                        fontFamily: 'samarkan',
                        fontSize: '5rem',
                        color: 'black', // Change color to black
                        textShadow: 'none', // Remove text shadow
                        padding: '0 12.2rem', // Adjust padding,
                        marginTop: '-2.2rem',
                        WebkitTextStroke: '1.5px black'
                    }}>Treasure</h6>
                    <div className='ml-[5rem] mt-[4rem]'>
                        <h2 className='pl-5' style={{ fontFamily: 'samarkan', fontSize: '3rem' }}>Redefining waste,</h2>
                        <h5 className='pl-[15rem] tracking-wider font-sans font-light' style={{ marginTop: '-1rem' }}>
                            Restoring our environment
                        </h5>
                        <h2 className='pl-[8rem] mt-[2rem]' style={{ fontFamily: 'samarkan', fontSize: '3rem' }}>Together,</h2>
                        <h5 className='pl-[4rem] tracking-wider font-sans font-light' style={{ marginTop: '-1rem' }}>
                            We forge a sustainable future, one bottle at a time.
                        </h5>
                        <h5 className='pl-[10rem]' style={{ marginTop: '-1rem' }}>

                        </h5>
                    </div>



                    <div className=' text-center font-sans  mt-[5rem] ' >
                        <Link to="/login" className=' text-black text-decoration-none'>
                            <button className=' hover:bg-black hover:text-white border-1 border-black shadow-2xl rounded-pill w-[20rem] h-[3rem] transition ease-in-out duration-300 hover:-translate-0.7 hover:scale-105 tracking-widest'>Join Us</button>

                        </Link>

                    </div>
                </div>
                <div className=' w-full' style={{
                    width: '100%',
                    filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.2))',
                }}>
                    <div 
                    // style={{
                    //     backgroundImage: `url(${i1})`,
                    //     backgroundSize: 'contain',
                    //     backgroundPosition: 'center',
                    //     backgroundRepeat: 'no-repeat',
                    //     width: '100%',
                    //     height: '100%',
                    // }}
                    >
                    </div>
                </div>


            </div>
            <ImageCarousel />
            <Wave/>
            <Services />
           
            <Slider/>
        </>
    );
};

export default Hero;
