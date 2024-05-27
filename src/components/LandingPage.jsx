import React, { useState } from 'react';
import axios from 'axios';
import google from '../assets/google.png';
import green from '../assets/901726_OAI50C0.jpg';
import '../components/style.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({setLogin}) => {
    const [signUp, setsignUp] = useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://sdg-backend-us3m.onrender.com/api/login', { email, password });
            console.log(response.data);
            navigate('/login-success');
            setLogin(true);
        } catch (error) {
            console.error('Login Error:', error.response?.data);
            alert('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('https://sdg-backend-us3m.onrender.com/api/register', { email, password });
            console.log(response.data);
            if (response.data.success) {
                alert('Registration successful');
                navigate('/registration-success');
            }
        } catch (error) {
            console.error('Registration Error:', error.response?.data);
            alert('Registration failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    };


    const switchForm = () => {
        setsignUp(!signUp);
        // Clear input fields when switching forms
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    return (
        <div className=' bg-white sm:block w-full max-h-full font-sans' style={{ height: '100vh', paddingTop: '10rem' }}>
            <div className="border-1 place-content-center shadow container d-flex justify-content-center align-item-center" style={{ height: 'auto', width: '90%', maxWidth: '900px', margin: 'auto', marginTop: '1rem', borderRadius: '1rem', overflow: 'hidden' }}>
                <div className=" hidden md:block border-2 shadow ml-0 mt-2 mb-2.5" style={{ width: '50%', backgroundImage: `url(${green})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1rem' }}></div>
                <div className="container h-auto rounded m-3 p-3 sm:flex flex-col flex-shrink" style={{ flex: '1' }}>
                    <div className="text-left mb-2">
                        <h6 className='pl-3 tracking-widest font-light'>Hii There !!</h6>
                        <h3 className='pl-3 tracking-widest font-light'>
                           {signUp ? "Create Account" : "Welcome Back"}
                        </h3>
                    </div>
                    <button className="btn btn-outline-dark mx-1 flex justify-center items-center">
                        <div className='flex items-center justify-center font-bold'>
                            <img className="h-8 mr-2" src={google} alt="Google Logo" />
                            <span className='text-balance tracking-wider font-light'>Continue with Google</span>
                        </div>
                    </button>
                    <div className="mt-3 mb-4"></div>
                    <form className='d-flex flex-col flex-wrap' onSubmit={signUp ? handleRegister : handleSubmit}>
                        <div className="mb-4">
                            <input type="email" className="form-control h-11" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text hidden sm:block">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control h-11" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {signUp && (
                            <div className="mb-4">
                                <input type="password" className="form-control h-11" id="exampleInputConfirmPassword1" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        )}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        <div className="container ">
                            <button type="submit" className="btn btn-outline-dark w-full mb-3 h-11 rounded-full"><span className='flex items-center justify-center tracking-widest font-light '>{signUp ? 'Register' : 'Login'}</span></button>
                        </div>
                        <div className="container text-blue-500">
                            <a href="#" className='no-underline' onClick={switchForm}> {signUp ? "Return to Login" : "Don't have account? Sign Up"} </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;


