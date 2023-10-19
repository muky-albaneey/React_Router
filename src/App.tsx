import { useState } from 'react';
import { Home } from './Van/Home.tsx';
import {About} from './Van/About.tsx'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './Van/Header.tsx';
import Footer from './Van/Footer.tsx';


export default function App() {
  
  return (
    <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />            
          </Routes>        
          <Footer />
    </>
  )
}

// export function About() {
  
//   return (
//     <>
//      <h1>About Assalamu Alaikum</h1>
//     </>
//   )
// }
 
 