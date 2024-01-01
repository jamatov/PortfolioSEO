import React from 'react'
import Header from './Header'
import About from './About'
import Partners from './Partners'
import Project from './Project'
import Service from './Service'
import Portfolio from './Portfolio'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Navbar from './Navbar'
import Faq from './Faq'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />
      <About />
      <Partners />
      <Project />
      <Service />
      <Faq/>
      {/* <Portfolio /> */}
      <Testimonial />
      <Contact />
    </>
  )
}
