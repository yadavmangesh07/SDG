import React from 'react';

const About = () => {
  return (
    <div className="container absolute font-sans tracking-widest  ">
      <div className="text-center p-5 mt-[3rem] ml-[6rem] ">
        <h2 className=" mb-4 text-sky-500" style={{fontSize:'2rem'}}>About Us</h2>
        <p className="text-lg text-gray-700 mb-8 flex">
          At <span className=" ">
          <h6 className='flex pl-2' style={{
          fontFamily: 'samarkan',
          fontSize: '2.5rem',
          color: 'black', // Change color to black
          textShadow: 'none' // Remove text shadow
        }} >Bio <span className='font-sans tracking-tighter' style={{ color: 'red',
        WebkitTextStroke: '.5px black', }}>fuel</span></h6>
            
            </span>, we're committed to revolutionizing the way we handle plastic waste. Our mission is simple yet profound: to convert plastic into a valuable resource, mitigating its harmful impact on the environment while simultaneously providing a sustainable energy solution.
        </p>
      </div>
      <div className="mb-12 border-1 shadow-lg rounded p-3 ml-[6rem] ">
        <h3 className="text-2xl  mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-8">
          Our goal is to significantly reduce the presence of plastic waste in our environment by transforming it into biofuel. By harnessing innovative technology and a passion for environmental stewardship, we're turning the tide on plastic pollution.
        </p>
      </div>
      <div className="mb-12 border-1 shadow-lg rounded p-3 ml-[6rem]">
        <h3 className="text-2xl  mb-4">How It Works</h3>
        <p className="text-lg text-gray-700 mb-8">
          Through our user-friendly website, individuals and businesses can easily contribute to our cause by scheduling pickups for their plastic waste right from their doorstep. Additionally, users can report plastic hotspots, enabling us to target areas in need of cleanup efforts.
        </p>
      </div>
      <div className="mb-12 border-1 shadow-lg rounded p-3 ml-[6rem]">
        <h3 className="text-2xl  mb-4">The Biofuel Solution</h3>
        <p className="text-lg text-gray-700 mb-8">
          The biofuel produced from recycled plastic not only offers a renewable energy source but also boasts significantly lower carbon emissions compared to traditional fuels. This makes it a crucial component in the transition to a greener, more sustainable future.
        </p>
      </div>
      <div className="mb-12 border-1 shadow-lg rounded p-3 ml-[6rem]">
        <h3 className="text-2xl  mb-4">Beyond Fuel</h3>
        <p className="text-lg text-gray-700 mb-8">
          Our process yields valuable byproducts that find application in chemical laboratories, further enhancing the circular economy model and minimizing waste at every stage.
        </p>
      </div>
      <div className='ml-[6rem]'>
        <h3 className="text-2xl  mb-4 text-green-600">Join Us</h3>
        <p className="text-lg text-gray-700 mb-8">
          Together, we can make a tangible difference in the fight against plastic pollution. Join us in our mission to create a cleaner, healthier planet for generations to come.
        </p>
      </div>
    </div>
  );
};

export default About;
