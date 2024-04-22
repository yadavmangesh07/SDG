import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Message from './components/Message'




function App() {
  const [login, setLogin] = useState(false)
  const [userDetails, setuserDetails] = useState(null)



  return (
    <BrowserRouter>
  
    <Navbar login={login}/>
    
   
    
    <Routes>
     <Route path='/form' element={<LandingPage setLogin={setLogin} setuserDetails={setuserDetails} userDetails={userDetails} />}></Route>
     <Route path='/' element={<Hero/>}></Route>
   
   
    </Routes>
      
    </BrowserRouter>
      
   
    
    // <LandingPage/>
    // <Message/>
    
    
  )
}

export default App
