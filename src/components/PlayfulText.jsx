import React from 'react'

function PlayfulText() {
  return (
    <div className='w-full h-[100vh] bg-[#CDEA68]'>
        <div className='pt-20 text-center'>
            <h1 className='font-bold tracking-tighter text-[20vh] leading-[17vh] text-[#212121]'>READY</h1>
            <h1 className='font-bold tracking-tighter text-[20vh] leading-[17vh] text-[#212121]'>TO START</h1>
            <h1 className='font-bold tracking-tighter text-[20vh] leading-[17vh] text-[#212121]'>THE PROJECT?</h1>
        </div>
        <div className='ml-[42vw] mt-20'>
            <button className='flex items-center gap-4 px-5 py-3 bg-black text-white rounded-3xl hover:bg-[#CDEA68] hover:border-2 hover:border-black hover:text-black'>START THE PROJECT
            <div className='h-2 w-2 bg-black rounded-full'></div>
            </button>
            <p className='text-2xl text-black mt-3 mb-3 ml-[5vw]'>OR</p>
            <button className='flex items-center gap-4 p-3 border-black border-2 text-black rounded-3xl hover:bg-black hover:text-white'>HELLO@OCHI.DESIGN
            <div className='h-2 w-2 bg-[#CDEA68] rounded-full'></div>
            </button>
        </div>
    </div>
  )
}

export default PlayfulText
