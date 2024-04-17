import React from 'react';
import google from '../assets/google.png';
import green from '../assets/901726_OAI50C0.jpg';
import '../components/style.css';

const LandingPage = () => {
    

    return (
        <div className='sm:block w-full max-h-full font-sans  ' style={{height:'100vh',marginTop:'5rem'}}>
            

            <div className="border-1 place-content-center shadow container d-flex justify-content-center align-item-center" style={{ height: 'auto', width: '90%', maxWidth: '900px', margin: 'auto', marginTop: '1rem', borderRadius: '1rem', overflow: 'hidden' }}>
            <div className=" hidden md:block border-2 shadow ml-0 mt-2 mb-2.5" style={{
                    width: '50%',
                    backgroundImage: `url(${green})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '1rem'
                }}></div> 
               
                




                <div className="container h-auto rounded m-3 p-3 sm:flex flex-col flex-shrink" style={{ flex: '1' }}>
                    <div className="text-left mb-2">
                        <h6 className='pl-3 tracking-widest'>Hii There !!</h6>
                        <h3 className='pl-3 tracking-widest'>Welcome Back</h3>
                    </div>
                    <button className="btn btn-outline-dark mx-1 flex justify-center items-center">
                        <div className='flex items-center justify-center font-bold'>
                            <img className="h-8 mr-2" src={google} alt="Google Logo" />
                            <span className='text-balance tracking-wider'>Continue with Google</span>
                        </div>
                    </button>
                    <div className="mt-3 mb-4">Or Login with E-mail</div>
                    <form className='d-flex flex-col flex-wrap'>
                        <div className="mb-4">
                            <input type="email" className="form-control h-11" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Id' />
                            <div id="emailHelp" className="form-text hidden sm:block ">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control h-11" id="exampleInputPassword1" placeholder='Password' />
                            <p className='mt-2'><a className='text-decoration-none' href="#">Forgot Password?</a></p>
                        </div>
                        <div className="container ">
                            <button type="submit" className="btn btn-outline-dark w-full mb-3 h-11 rounded-full"><span className='flex items-center justify-center font-bold tracking-widest '>Login</span></button>


                        </div>
                        <div className="container text-blue-500">
                            <a href="#" className='	no-underline'> Don't have account? Sign Up </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
