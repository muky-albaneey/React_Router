import React from 'react'
import { Link } from 'react-router-dom';
import './hostVan.css';

const HostVan = () => {
    
    const [hostVans, setHostVans] = React.useState([]);

    React.useEffect(()=>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    },[]);

    const host = 
    <div className='host flexColStart'>
        
    {
      hostVans.map(hostVan => (
          <Link to={`${hostVan.id}`} key={hostVan.id} className='hostWrapper flexCenter'>
              <div className='hostContainer flexCenter' key={hostVan.id}>
                  <img src={hostVan.imageUrl} alt="" />
                  <div className="hotVanInfo">
                      <h3>{hostVan.name}</h3>
                      <p>${hostVan.price}/day</p>
                  </div>
              </div>
          </Link>
      ))
    }
  </div>
  return (
    <section>
        {hostVans.length > 0 ? (host) : 
            <h2>loading...</h2>
        }
    </section>
  )
}

export default HostVan
