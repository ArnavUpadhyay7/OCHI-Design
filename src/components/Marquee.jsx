import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
        <div className='text flex border-t-2 overflow-hidden border-b-2 border-zinc-400 whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration: 8}} className='text-[15vw] leading-none font-bold px-10'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration: 8}} className='text-[15vw] leading-none font-bold px-10'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration: 8}} className='text-[15vw] leading-none font-bold px-10'>WE ARE OCHI</motion.h1>
        </div> 
    </div>
  )
}

export default Marquee
