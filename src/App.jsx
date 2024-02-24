import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import PlayfulText from './components/PlayfulText'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='text-white w-full min-h-screen bg-zinc-900' >
      <Navbar />
      <LandingPage /> 
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />      
      <PlayfulText />
      <Footer />
    </div>
  )
}

export default App

