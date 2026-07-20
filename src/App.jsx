import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import About from './Components/About/About'
import Review from './Components/Review/Review'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/review" element={<Review />} />
          <Route path="/services" element={<Services />} />
           <Route path="/blog" element={<Blog/>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
