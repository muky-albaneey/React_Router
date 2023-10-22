import React from 'react'
import './van.css';
import { Link } from 'react-router-dom';

const Vans = () => {
  
  const [vansData, setVans] = React.useState([]);

  React.useEffect(()=>{
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))

  },[])
  
  console.log(vansData);

const data =   vansData.map(data => (     
  <div className='vanContainer flexColStart' key={data.id}>
    <Link to={`/van/${data.id}`} className=''>
    <img src={data.imageUrl} alt="" />
    <div className='vanInfo flexCenter'>
      <h3>{data.name}</h3>
      <p>{data.price}<span>/day</span></p>
     
    </div>
    <i className={`vanType ${data.type} selected`}>{data.type}</i>
    </Link >
  </div>   
))
  return (

    <div className='van'>
      <h1>Explore our van option🎠 </h1>
    <div className='vanWrapper flexCenter'>
      
      {data}
    </div>
    </div>
  )
}

export default Vans
