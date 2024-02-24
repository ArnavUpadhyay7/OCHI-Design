import React from 'react'

function About() {
  return (
    <div className='w-full p-20 pr-40 rounded-t-3xl bg-[#CDEA68] text-black'>
      <h1 className='text-[3.5vw] leading-[3.5vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='flex w-full pt-6 mt-20 border-t-[1px] border-[#a1b562]'>
        <div className='w-1/2 '>
            <h1 className='text-6xl'>Our approach:</h1>
            <button className='flex gap-8 items-center px-8 py-4 mt-8 bg-zinc-800 hover:bg-black text-white rounded-full'>READ MORE
            <div className='h-3 w-3 rounded-full bg-white'></div>
            </button>
        </div>
        <div className='w-1/2 h-[52vh]'>
            <img className="hover:scale-[0.9] ease-out duration-1000 object-cover rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" />
        </div>
      </div>
    </div>
  )
}

export default About
