import React from 'react'
import { Outlet, useOutletContext } from "react-router-dom";

const Reviews = () => {
    const {hostDetail} = useOutletContext();
  return (
    <div>
      🛐 Reviews
    </div>
  )
}

export default Reviews
