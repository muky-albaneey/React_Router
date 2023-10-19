import React from 'react'
import { Link } from 'react-router-dom';

 const Header = () => {
  return (
    <header className='heading flexCenter'>
            <aside className='rightNav'>
                #vanlife
            </aside>
            <nav className='leftNav flexCenter'>
                <Link to='/about'>About</Link>
                <Link to='/'>Home</Link>
            </nav>
        </header>
  )
}

export default Header
