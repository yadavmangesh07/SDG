import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Map from './components/Map'
import Message from './components/Message'
import Register from './components/Register'
import About from './components/About'




function App() {
  const [login, setLogin] = useState(false)
  const [userDetails, setuserDetails] = useState(null)



  return (
    <BrowserRouter>
  
    <Navbar login={login} setLogin={setLogin}/>
    
   
    
    <Routes>
     <Route path='/form' element={<LandingPage setLogin={setLogin} setuserDetails={setuserDetails} userDetails={userDetails} />}/>
     <Route path='/' element={<Hero />}/>
     <Route path='/login-success' element={<Message/>}/>
     <Route path='/registration-success' element={<Register/>}/>
     <Route path='/contribute' element={<Map/>}/>
     <Route path='/about' element={<About/>}/>

   
   
    </Routes>
      
    </BrowserRouter>
    // <Map/>
    // <Message/>
    // <Register/>
    // <About/>
      
   
    
    
    
    
  )
}

export default App
