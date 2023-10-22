import React from 'react'
import { Outlet, useOutletContext } from "react-router-dom";
const Photos = () => {
    const {hostDetail} = useOutletContext();
  return (
    <div className='flexCenter'>
        {<img src={hostDetail.imageUrl} style={{width: '70%'}} alt="" />}
        {<img src={hostDetail.imageUrl} style={{width: '20%'}} alt="" />}
    </div>
  )
}

export default Photos
