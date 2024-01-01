import React from 'react'
import NavInsta from '../img/navInsta.svg'
import NavFcBook from '../img/NavFsBook.svg'
import NavLN from '../img/NavLN.svg'
import NavSite from '../img/telegram-icon.svg'

export default function Header() {
  

  return (
    <section className='headerSection'>
      
      <div className="container ">
        {/* NAVBAR START */}
        


        {/* HERO START */}

        <div className='heroContent ' id='/'>
          <div className='heroInfo'>
            <h2>Меня зовут</h2>
            <h3 className='name-text'>Mirabdulla</h3>
            <span>Профессиональный SEO-специалист</span>
            <a href="#">Бесплатная консультация</a> 
          </div>

          <ul>
            <li>
              <a href="https://www.instagram.com/otabekov1ch/" target='_blank'>
                <div>
                  <img src={NavInsta} alt="..." />
                </div>
              </a></li>
            <li>
              <a href="#">
                <div>
                  <img src={NavFcBook} alt="..." />
                </div>
              </a></li>
            <li>
              <a href="#">
                <div>
                  <img src={NavLN} alt="..." />
                </div>
              </a></li>
            <li>
              <a href="#">
                <div>
                  <img className='social-icons' src={NavSite} alt="..." />
                </div>
              </a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
