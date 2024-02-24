import React from 'react'

function Cards() {
  return (
    <div className='flex bg-black gap-10 py-48 border-t-[1px] border-zinc-700 px-20'>
        <div className='cursor-pointer hover:scale-[1.1] ease-out duration-1000 flex justify-center items-center w-[60%] rounded-3xl h-[50vh] bg-[#004D43]'>
            <img className='h-20' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
            <div className='pt-[20vw] absolute pr-[30vw]'>
                <button className='border-[1px] border-[#CDEA68] rounded-3xl py-1 px-3 text-[#CDEA68] hover:text-black hover:font-semibold hover:bg-[#CDEA68]'>
                    @2019-2022
                </button>
            </div>
        </div>
        <div className='cursor-pointer hover:scale-[1.1] ease-out duration-1000 flex justify-center items-center w-[30%] rounded-3xl h-[50vh] bg-[#212121]'>
            <img className='h-24' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
            <div className='pt-[20vw] absolute pr-[6vw]'>
                <button className='border-[1px] border-white rounded-3xl py-1 px-3 hover:text-black hover:font-semibold hover:bg-[#F1F1F1]'>
                    RATING 5.0 ON CLUTCH
                </button>
            </div>
        </div>
        <div className='cursor-pointer hover:scale-[1.1] ease-out duration-1000 flex justify-center items-center w-[30%] rounded-3xl h-[50vh] bg-[#212121]'>
            <img className='h-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
            <div className='pt-[20vw] absolute pr-[3vw]'>
                <button className='border-[1px] border-white rounded-3xl py-1 px-3 hover:text-black hover:font-semibold hover:bg-[#F1F1F1]'>
                    BUSINESS BOOTCAMP ALUMNI
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards
