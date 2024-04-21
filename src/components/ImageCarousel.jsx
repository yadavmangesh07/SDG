import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons/faEyeDropper';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
import { faRecycle } from '@fortawesome/free-solid-svg-icons/faRecycle';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved';


const ImageCarousel = () => {
    return (
        <div className=' border-t-white top-[-.9rem]   relative overflow-hidden' style={{backgroundColor:'rgba(255, 255, 255, 1)'}} >
            <Carousel autoPlay infiniteLoop={true} showThumbs={false} className=' '>
                <div >
                    <img src={slide1} alt="Upcycling" className='w-full h-full object-cover' style={{ height: '70vh' }} />
                </div>
                <div>
                    <img src={slide2} alt="Upcycling" className='w-full h-full object-cover' style={{ height: '70vh' }} />
                </div>
                <div>
                    <img src={slide3} alt="Upcycling" className='w-full h-full ' style={{ height: '70vh' }} />
                </div>

                {/* Add more images here */}
            </Carousel>
            <div className="parent flex  justify-around space-x-4  m-5 h-auto "
            
            >
                <div className='p-2 w-[25%] drop-shadow-lg  border-green shadow-md  rounded-4 text-center  transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-105 hover:shadow-black' style={{backgroundColor:'rgba(255, 255, 255, .8)'}}><FontAwesomeIcon icon={faPeopleGroup} style={{ color: "black", fontSize: '4rem', padding: '1rem' }} />
                    <h5 className='font-sans font-normal tracking-widest '>Looking for like-minded people</h5>
                    <p className=' font-sans font-extralight text-s'>If you are a person who supports our ideas and wants to make his utmost contribution, we welcome you!</p>
                </div>
                <div className=' w-[25%] drop-shadow-lg shadow-md rounded-4 text-center p-2 transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-105 hover:shadow-black' style={{backgroundColor:'rgba(255, 255, 255, .8)'}}><FontAwesomeIcon icon={faRecycle} style={{ color: "black", fontSize: '4rem', padding: '1.5rem' }} />
                    <h5 className='font-sans font-normal tracking-widest ' >Learn About Recycling</h5>
                    <p className='font-sans font-extralight text-s'>Learn how recycling makes a big impact. Each recycled plastic item contributes to a cleaner environment. Join us in reducing plastic waste through recycling.</p>

                </div>
                <div className='w-[25%] drop-shadow-lg shadow-md  rounded-4 text-center p-2 transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-105 hover:shadow-black' style={{backgroundColor:'rgba(255, 255, 255, .8)'}}><FontAwesomeIcon icon={faShieldHalved} style={{ color: "black", fontSize: '4rem', padding: '1rem' }} />
                    <h5 className='font-sans font-normal  tracking-widest'>Empowering Sustainability</h5>
                    <p className='font-sans font-extralight text-s'>Join our mission for a sustainable future. By converting plastic waste into biofuel, we're fighting pollution and creating a cleaner planet.</p>

                </div>
                <div className='w-[25%] drop-shadow-lg shadow-md  rounded-4 text-center p-2 transition ease-in-out duration-300  hover:-translate-y-0.7 hover:scale-105 hover:shadow-black' style={{backgroundColor:'rgba(255, 255, 255, .8)'}}><FontAwesomeIcon icon={faEyeDropper} style={{ color: "black", fontSize: '4rem', padding: '1rem' }} />
                    <h5 className='font-sans font-normal tracking-widest'>Each of us is important</h5>
                    <p className='font-sans font-extralight text-s'>Our organization expand the ideas of saving world’s ecology and is grateful for every little contribution!</p>

                </div>

            </div>
                
        </div>
    )
}

export default ImageCarousel
