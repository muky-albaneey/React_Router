import { Home } from './Van/Home.tsx';
import {About} from './Van/About.tsx'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './Van/Footer.tsx';
import Vans from './Van/Vans.tsx';
import './server.js';
import VanDetail from './Van/VanDetail.tsx';
import Layout from './components/Layout.tsx';
import Dashboard from './Host/Dashboard.tsx';
import IconmHost from './Host/IconmHost.tsx';
import Reviews from './Host/Reviews.tsx';
import HostLayout from './Host/HostLayout.tsx';
import HostVan from './Host/HostVan.tsx';
import HostVanDetail from './Host/HostVanDetail.tsx';
import Detail from './Host/Detail.tsx';
import Pricing from './Host/Pricing.tsx';
import Photos from './Host/Photos.tsx';

export default function App() {
  
  return (
    <>          
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />            
              <Route path='van'>
                 <Route index  element={<Vans />} />
                  <Route path=':id' element={<VanDetail />} />            
              </Route>            
              <Route path='host' element={<HostLayout />} >                
                <Route index element={<Dashboard />} />            
                <Route path='income' element={<IconmHost />} />                                     
                <Route path='review' element={<Reviews />} />   
                <Route path='hostvan' element={<HostVan />} />
                <Route path='hostvan/:id' element={<HostVanDetail />} >
                  <Route index element={<Detail />} />
                  <Route path='photos' element={<Photos />} />                               
                  <Route path='price' element={<Pricing />} />                                                                                
                </Route>                               
              </Route>            
            </Route>
          </Routes>        
          
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
 
 