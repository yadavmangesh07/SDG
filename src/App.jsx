import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import ImageCarousel from './components/ImageCarousel'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Slider from './components/Slider'


function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    
  
     
      {/* <LandingPage/> */}
      <Routes>
        <Route path='/form' element={<LandingPage/>}></Route>
      </Routes>
      

     <Hero/>
      
    </BrowserRouter>
      
   
    
    // <LandingPage/>
    
  )
}

export default App
