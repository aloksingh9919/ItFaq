"use client"

import { useMycontext} from "@/app/context/DropdownContex"
import useFetch from "@/app/coustomhook/Category"
import { useRouter } from "next/navigation"


const Dropdownmenu = () => {
  const { showMenu, setShowMenu } = useMycontext()
  const [categories] = useFetch("https://backend1.dev.smartcyberhive.com/api")
  const router = useRouter()

  const handleclick = (id) => {

    router.push(`/category/${id}`)
    setShowMenu(false)
  }

  return (
    (showMenu && <div
      className='w-full absolute top-[110px] '>
      <div className='m-auto w-[90vw]   bg-gray-200  shadow-lg px-4 rounded-md h-full grid  grid-cols-3 gap-2 space-y-2 py-4 '>
        {categories.categorymenu?.map((item, index) => (
          <button
            onClick={() => { handleclick(item.slug) }}
            key={index}
            className="px-1 text-[13px] hover:text-gray-700  cursor-pointer"
          >
            {item.name?.charAt(0).toUpperCase() + item.name.slice(1)}
          </button>
        ))}

      </div>
    </div>)
  )
}

export default Dropdownmenu