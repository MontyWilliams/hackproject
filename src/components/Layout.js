import React from 'react'
import Header from './Header';
import Home from './Home';
import About from './About';
import Find from './Find';
import Contact from './Contact';
import Testimonials from './Testimonials';



const Layout = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-t from-green-100 ">
        <Header />
        <Home />
        <Find />
        <Testimonials />
        <About />
        <Contact />
    </div>
  )
}

export default Layout
