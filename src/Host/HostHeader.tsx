import React from 'react'
import { NavLink } from 'react-router-dom'

const active = {
    fontWeight: 'bold',
    color : 'rgb(108, 7, 7)',
    textDecoration : 'underline'
    // textDecoration: 'underline'
}
const HostHeader = () => {
  return (
    <div>
      <nav style={{alignItems: 'flex-start', gap: '3rem', padding: '2rem'}} className='flexColStart secondaryColor'>
        <ul style={{gap: '3rem', listStyle: 'none'}} className='flexCenter'>
            <li><NavLink to='.' end style={({isActive}) => isActive ? active : null}>Dashboard 💨 </NavLink></li>
            <li><NavLink to='income' style={({isActive}) => isActive ? active : null}>Income 💰 </NavLink></li>
            <li><NavLink to='hostvan' style={({isActive}) => isActive ? active : null}>Vans 🚌 </NavLink></li>
            <li><NavLink to='review' style={({isActive}) => isActive ? active : null}>Reviews ✔ 🎑 </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default HostHeader
