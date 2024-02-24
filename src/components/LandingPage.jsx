import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-black pt-1'>
      <div className='textstructure mt-48 px-20'>
        {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item,index)=>{
        return <div className='masker'>
                    <div className='w-fit flex'>
                        {index===1 && (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0 ,0.24, 1], duration: 1}} className='mr-[1vw] w-[9vw] rounded-md overflow-hidden h-[5vw] relative top-[0.8vw]'> <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" /> </motion.div>)}
                        <h1 className='text-8xl font-semibold leading-[6vw] tracking-tight font-["Rejouice Headline"]'>
                            {item}
                        </h1>
                    </div>
                </div>
        }
        )}
        
      </div>
      <div className='flex justify-between items-center py-5 px-20 border-t-2 border-zinc-800 mt-40'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none'>
                {item}
            </p>
        )}
        <div className='start flex items-center gap-5'>
            <div className='px-4 py-2 border-[2px] border-zinc-600 font-light rounded-full hover:text-black hover:font-semibold hover:bg-white cursor-pointer'>START THE PROJECT</div> 
            <div className='w-10 h-10 flex justify-center items-center border-[2px] border-zinc-600 rounded-full hover:text-black hover:bg-white cursor-pointer'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                </span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
