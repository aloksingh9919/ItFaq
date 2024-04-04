import Image from 'next/image'
import React from 'react'

const Bottomsmallnews = () => {
  return (
    <div className='flex w-full p-1 h-full  border-b-2 max-xl:border-l-0 border-l-2'>
      <div className='flex flex-col gap-1 w-[65%] '>
        <div className=' font-DM text-[22px] font-bold tracking-normal line-clamp-1'>
          Haa ji To kese Hai aap log Sab Bdiya Kya socha tha nhi aayenge
        </div>
        <div className='line-clamp-3 font-sans text-[16px] tracking-tight text-zinc-700 leading-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint ea blanditiis adipisci repellendus nihil cupiditate necessitatibus minima, provident eum saepe natus quo iusto aut nemo tempora incidunt accusantium architecto. saepe natus quo iusto aut nemo tempora incidunt accusantium architecto.
        </div>
        <span className='text-[14px] font-DM text-gray-600'>28-03-2024</span>
      </div>
      <div className='w-[40%] h-full  p-1 m-auto mt-auto relative'>
      <Image
          className="rounded-md"
          src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          alt="Image"
          fill
        />
        </div>
    </div>
  )
}

export default Bottomsmallnews