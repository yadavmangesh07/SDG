import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import ImageCarousel from './components/ImageCarousel'
import { BrowserRouter , Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
  
     
      {/* <LandingPage/> */}

      <Routes>
        <Route path='/login' element={<LandingPage/>}/>
        <Route path='/' element={<Hero/>}/>
        <Route path='/' element={<ImageCarousel/>}/>
      </Routes>
      
   
    
    </BrowserRouter>
  )
}

export default App
