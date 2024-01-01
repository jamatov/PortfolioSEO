import React from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Project() {
  return (
    <div className='container'>
      <div className='projectCard'>
        <Fade left>
          <h2>
            
            Давайте работать вместе 

          </h2>
        </Fade>
          <a target="_blank"  href="https://t.me/mirabduIIa"> 
            <Fade right>
              <button> Konsultatsiya<i className="m-0 fa-brands fa-telegram"></i></button> 
            </Fade>
          </a>
      </div>
    </div>
  )
}
