import React from 'react'
import {useState, useEffect} from 'react'
import NavBrand from '../img/seo-logo.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  useEffect(() => {
  }, [])
  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="navBody">
          <Link to='/'>
            <div className='nav-logo'>
              <img src={NavBrand} alt="..." />
            </div>
          </Link>

          <ul className={active}>
            <li>
              <Link  to="/" className='nav-link' spy={true} smooth={true} offset={0} duration={100} onClick={navToggle}>главный</Link>
            </li>
            <li>
              <Link  to="mahsulot" className='nav-link' spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle}>о мне</Link>
            </li>
            <li>
              <Link  to="loyiha" className='nav-link' spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle}>услуги</Link>

            </li>
            {/* <li>
              <Link  to="portfolio" className='nav-link' spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle}>проекты</Link>

            </li> */}
            <li>
              <Link to='contact' spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle} className='NavBtn'>контакт</Link>  
            </li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
