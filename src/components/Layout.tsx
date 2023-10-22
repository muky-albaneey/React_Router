import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Van/Header';
import Footer from '../Van/Footer';

const Layout = () => {
  return (
    <div>
        <Header />
            <Outlet />  
        <Footer />         
    </div>
  )
}

export default Layout
