import React from 'react'
import { Outlet } from 'react-router-dom'
import HostHeader from '../Host/HostHeader'

const VanLayout = () => {
  return (
    <div>
      😻 <HostHeader />
      <Outlet />
    </div>
  )
}

export default VanLayout
