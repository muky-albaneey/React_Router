import React from 'react'
import { Link, NavLink, Outlet, useParams,useOutletContext  } from 'react-router-dom'
import './hostVanDetail.css';

const active = {
    color: 'brown',
    textDecoration: 'underline'
}


const HostVanDetail = () => {

    
    const params = useParams();
    // const [detail, setDetail] = React.useState(null);
    const [hostDetail, setHostDetail] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res=> res.json())
            // .then(data=> console.log(data))
            .then(data=>setHostDetail(data.vans))
            // console.log(data.vans)
    },[params.id])
    

   return (
    <div>
      {hostDetail? (
            <section>
                <Link to='..' relative='path'>🔙Back Home 🏡 </Link>
                  <div className="hostDetailWrapper flexColStart">
            <div className='hosinfoCon flexCenter'>
                 <img src={hostDetail.imageUrl} alt="" />
                 <div className='hosinfoCon2 flexColStart'>
                  <i className={`vanType ${hostDetail.type} selected`}>{hostDetail.type}</i>
                  <h2>{hostDetail.name}</h2>
                 <p>${hostDetail.price}/day</p>                
                </div>
             </div>


            <div className="hostNavCon flexCenter">
                <NavLink to='.' end style={({isActive}) => isActive ? active : null}>Detail</NavLink>
                <NavLink to='price' style={({isActive}) => isActive ? active : null}>Pricing</NavLink>
                <NavLink to='photos' style={({isActive}) => isActive ? active : null}>Photos</NavLink>
            </div>
            <Outlet context={{hostDetail}} />
           
           
        </div>
            </section>
      ) : <h2>Loading....</h2>}
    </div>
  )
}


export default HostVanDetail
