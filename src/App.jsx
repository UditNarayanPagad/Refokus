import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Products from './components/Products'
import Marquee from './components/Marquee'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-black w-full text-white'>
      <Navbar/>
      <Work/>
      <Products/>
      <Marquee/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App