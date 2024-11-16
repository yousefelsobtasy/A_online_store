import Link from "next/link"
import Image from "next/image"
import Menu from "./Menu"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    return (
        <header className='px-[1.8rem] md:px-[2.2rem] py-[10px] relative shadow flex items-center justify-between gap-8'>
            {/* RIGHT */}
            <div className="w-1/3">
                <Menu />
            </div>
            {/* MIDDLE  */}
            <div className="w-1/3 flex justify-center">
                <h1 className="flex items-center justify-center">
                    <Link href={`/`} className="p-[7.5px] curser-pointer inline-block text-center">
                        <Image src="/logo.png" alt="logo" width={90} height={24} />
                    </Link>
                </h1>
            </div>
            {/* LEFT  */}
            <div className="w-1/3 flex items-center justify-end gap-4 text-[1.5rem]">
                <IoSearchOutline className="cursor-pointer" />
                <VscAccount className="cursor-pointer hidden md:block" />
                <IoCartOutline className="cursor-pointer" />
            </div>
        </header>
    )
}

export default Navbar