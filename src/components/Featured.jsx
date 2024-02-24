import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20 bg-black'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-14'>
        <h1 className='text-6xl tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='flex gap-10 mt-20'>
          <div className='flex items-center gap-2 w-1/2'>
            <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
            <h2 className=' text-2xl'>FYDE</h2>
          </div>
          <div className='flex items-center gap-2 w-1/2'>
            <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
            <h2 className=' text-2xl'>VISE</h2>
          </div>
        </div>
        <div className='cards-1 w-full flex gap-10 mt-6'>
          <div className='cursor-pointer hover:scale-[0.9] ease-out duration-1000 card-1 w-1/2 h-[75vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'></div>
          <div className='cursor-pointer hover:scale-[0.9] ease-out duration-1000 card-2 w-1/2 h-[75vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'></div>
        </div>
        <div className='flex gap-10 mt-20'>
          <div className='flex items-center gap-2 w-1/2'>
            <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
            <h2 className=' text-2xl'>TRAWA</h2>
          </div>
          <div className='flex items-center gap-2 w-1/2'>
            <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
            <h2 className=' text-2xl'>PREMIUM BLEND</h2>
          </div>
        </div>
        <div className='cards-2 w-full flex gap-10 mt-6'>
          <div className='cursor-pointer hover:scale-[0.9] ease-out duration-1000 card-3 w-1/2 h-[75vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")]'></div>
          <div className='cursor-pointer hover:scale-[0.9] ease-out duration-1000 card-4 w-1/2 h-[75vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")]'></div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Featured
