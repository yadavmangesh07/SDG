import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useState } from 'react'




function App() {
  const [login, setLogin] = useState(false)


  return (
    <BrowserRouter>
  
    <Navbar login={login}/>
    
  
     
    {/* <LandingPage/> */}
    
    <Routes>
     <Route path='/form' element={<LandingPage setLogin={setLogin} />}></Route>
     <Route path='/' element={<Hero/>}></Route>
   
   
    </Routes>
    
    

    
     
      
    </BrowserRouter>
      
   
    
    // <LandingPage/>
    
  )
}

export default App
