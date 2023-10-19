import React from 'react'
import './home.css';
import Header from './Header';

export const Home = () => {
  return (
    <section className='homeCon flexColStart'>
        
        <main className='mainCon'>
            <div className='mainWrapper flexColStart'>
               <div className='text flexColStart' >
               <article className='articles flexColStart'>
                    <h1>
                        Yout got the travel plans, we <br />got the vans.

                    </h1>
                    <h6>
                    Yout got the travel plans, we got the vans Yout got the travel plans, we got the vans  
                    {/* Yout got the travel plans, we got the    */}<br />
                    Yout got the travel plans, we got the vans Yout got the travel plans, we got the vans  
                    {/* Yout got the travel plans, we got the  */}
                    </h6>
                </article>
                <button>find your van</button>
               </div>              
            </div>
        </main>
    </section>
  )
}

//  default Home
