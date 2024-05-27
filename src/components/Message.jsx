import React from 'react';
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <>
    <div className="page flex justify-center   h-[100vh] w-[100vw] text-center">
        <div className="msgbox  flex  flex-col border shadow-lg rounded-lg mt-[8rem]  h-50 w-50"> 
        <h1 className='tracking-widest font-sans font-light m-4'>Login Successfull</h1>
        <img  src={profile} alt="success" style={{height:'10rem',width:'10rem',marginLeft:'17rem',marginTop:'1rem'}} />
        <Link to='/'>
        <button className='btn btn-outline-success w-40  mt-[2rem] tracking-widest'>Home</button>
        </Link>
        </div>

    </div>
    </>
  );
};

export default Message;
