import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ title }) => {
  return (

    <div className="max-w-2xl mx-auto  hover:opacity-90  transition-shadow duration-500 cursor-pointer">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">

        <Image
          className="rounded-t-lg"
          src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          alt="Image"
          height={200} width={400}
          sizes="(max-width:275px) ,(max-height:82px) "
          priority={true}
        />
        <div className="p-2">

          <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white line-clamp-2">{title}</h5>

          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 line-clamp-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <Link href={"/post/postid"} className=" font-semibold  hover:text-blue-900 text-blue-600 text-sm px-2 py-2  items-center ">
            Read more

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card