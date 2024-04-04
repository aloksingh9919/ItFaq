import Image from 'next/image'
import React from 'react'

const Bignews = () => {
  return (
    <div className='flex flex-col p-1'>
      <div className='w-full h-[350px] max-md:h-[250px] max-sm:h-[200px] p-1 m-auto mt-auto relative'>
      <Image
          className="rounded-md"
          src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          alt="Image"
          fill
        />

        {/* <Image src={"https://flowbite.com/docs/images/blog/image-1.jpg"} alt="image" className='w-full h-full object-fill rounded-md' /> */}
      </div>
      <div className='flex flex-col px-4 w-full gap-y-2'>
        <div className=' text-[24px] font-bold tracking-normal line-clamp-2 text-zinc-800 '>
          Haa ji To kese Hai aap log Sab Bdiya Kya socha tha nhi aayenge 
        </div>
        <div className='line-clamp-3 font-sans text-[16px] tracking-normal text-zinc-700 leading-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint ea blanditiis adipisci repellendus nihil cupiditate necessitatibus minima, provident eum saepe natus quo iusto aut nemo tempora incidunt accusantium architecto. saepe natus quo iusto aut nemo tempora incidunt accusantium architecto.
        </div>
        <span className='text-[14px] font-DM text-gray-600'>28-03-2024</span>
      </div>
    </div>
  )
}

export default Bignews