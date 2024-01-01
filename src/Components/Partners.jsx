import React from 'react'
import Behance from '../img/comfort-logo.png'
import Slack from '../img/webmarketinglogo.png'
import Dribble from '../img/sendvich-panel.png'
import Twilio from '../img/logo-steklomontaj.png'
import Github from '../img/grandmatras.svg'
import Fade from 'react-reveal/Fade';

export default function Partners() {
  return (
    <section className='partnerSection'>
      <div className="container">
        <div className='partnersContent'>
        <Fade cascade>
          <img src={Behance} alt="..." />
          <img src={Dribble} alt="..." />
          <img src={Slack} alt="..." />
          <img src={Twilio} alt="..." />
          <img src={Github} alt="..." />
        </Fade>

          
        </div>
      </div>
    </section>  
  )
}
