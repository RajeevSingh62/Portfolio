import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './component/Projects'
import Contact from './component/Contact'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
  < Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>



  </Routes>
   </BrowserRouter>
  )
}

export default App
