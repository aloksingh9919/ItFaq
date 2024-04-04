
import { FiSearch } from "react-icons/fi";
import Image from 'next/image';
import AllPostButton from "./AllPostButton";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 shadow-sm '>
            <Image src={"/assets/logo.png"} alt="logo" width={110} height={60} />
            <div className="flex items-center justify-center gap-x-3">
            <Link href={"/"}>Home</Link>
                <AllPostButton/>
                <FiSearch size={28} className='hover:text-gray-600 cursor-pointer' />
            </div>
        </div>
    )
}
export default Navbar

