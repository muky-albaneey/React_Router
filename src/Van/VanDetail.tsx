import React from 'react'
import {Link, useParams} from 'react-router-dom';
import './vanDetail.css';

const VanDetail = () => {
    const params = useParams();
    
    const [param, setParam] = React.useState({});

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setParam(data.vans))
    },[params.id]);

  return (
    <div className='vanWrapper'>
        
    <Link to='/van'>
        Back to all vans
    </Link>
      {param ? (
        <div className='flexCenter'>
        <div className='vanDetail flexColStart'>
            <img src={param.imageUrl} alt="" />
            <i className={`vanType ${param.type} selected`}>{param.type}</i>
            <h2>{param.name}</h2>
            <p className='vanPrice'>
                <span className='price'>
                    ${param.price}<span className='day'>/day</span>
                </span>
                <p>{param.description}</p>
                <button className={`linkButton vanType ${param.type}`}>Rent this {param.type} 😇  van
                </button>
            </p>
        </div>
        </div>) : <h2>Loading....</h2>}
      
    </div>
  )
}

export default VanDetail
