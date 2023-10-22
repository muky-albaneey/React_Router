import React from 'react'
import { NavLink } from 'react-router-dom';

const active = {
    fontWeight: 'bold',
    color : 'rgb(57, 20, 20)',
    // textDecoration: 'underline'
}
 const Header = () => {
  return (
    <header className='heading flexCenter'>
            <aside className='rightNav'>
            <NavLink to='/'> #vanlife </NavLink> 
            </aside>
            <nav className='leftNav flexCenter'>
                <NavLink to='/about' style={({isActive}) => isActive ? active : null}>About</NavLink>
                <NavLink to='/host' style={({isActive}) => isActive ? active : null}>Host</NavLink>
                <NavLink to='/van'>Vans</NavLink>
            </nav>
        </header>
  )
}

export default Header
