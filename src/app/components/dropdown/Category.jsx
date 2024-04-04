"use client"
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx"
import { useMycontext } from "@/app/context/DropdownContex";
import useFetch from "@/app/coustomhook/Category";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Category = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { handleClick, showMenu } = useMycontext();
  const [categories] = useFetch("https://backend1.dev.smartcyberhive.com/api")

  if (!categories) {
    return <div className="text-[16px] animate-pulse items-center ">Loading...</div>;
  }

  const handleclick = (id) => {
    router.push(`/category/${id}`)
  }

  return (
    <div className="px-4 flex items-center justify-between ">
      <div className="text-nowrap overflow-x-auto space-x-2 custom-scrollbar pt-4">
        {categories.categorymenu?.map((item,index) => (
          <button
          key={index}
            className={`link ${pathname === `/category/${item.slug}` ? 'bg-[#277c8d] text-white rounded-sm' : ''}`}
            onClick={() => { handleclick(item.slug) }}
          >

            <span
              key={item.name}
              className={`px-1 text-[14px] cursor-pointer link ${pathname === `/category/${item.slug}` ? '' : 'hover:border-b-2 hover:border-black'}`}

            >
              {item.name?.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
          </button>

        ))}
      </div>
      <Button onClick={handleClick} variant="outline" className="p-1 mx-1">
        {!showMenu ? (<IoMenuOutline size={30} className="hover:text-gray-600 " />) :
          (<RxCross1 size={30} className="text-red-600 " />)}
      </Button>
    </div>
  )
}

export default Category;

