import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Map from './components/Map'




function App() {
  const [login, setLogin] = useState(false)
  const [userDetails, setuserDetails] = useState(null)



  return (
    <BrowserRouter>
  
    <Navbar login={login} setLogin={setLogin}/>
    
   
    
    <Routes>
     <Route path='/form' element={<LandingPage setLogin={setLogin} setuserDetails={setuserDetails} userDetails={userDetails} />}/>
     <Route path='/' element={<Hero />}/>
     <Route path='/contribute' element={<Map/>}/>
   
   
    </Routes>
      
    </BrowserRouter>
    // <Map/>

      
   
    
    
    
    
  )
}

export default App
