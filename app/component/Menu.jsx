'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
const Menu = () => {
    const [open, setOpen] = useState(false)
    const links = ['Homepage', 'Shop', 'Deals', 'About', 'contact', 'Logout', 'Cart(1)']
    return (
        <div className="">
            {open ? <TfiClose
                className="cursor-pointer w-[1.5rem] h-[1.5rem]"
                onClick={() => setOpen(prev => !prev)}
            />
                :
                <SlMenu
                    className="cursor-pointer w-[1.5rem] h-[1.5rem]"
                    onClick={() => setOpen(prev => !prev)}
                />}

            <nav className={"absolute top-[68.5px] bg-white w-full md:w-[399px] h-[calc(100vh-68.5px)] py-[1rem] flex flex-col gap-[.2rem] z-10 text-xl links" + (open ? ' active' : '')}>
                {
                    links.map(e => (
                        <div className="link-hover">
                            <Link className="flex items-center py-[.5rem] px-[2rem] text-[1.2rem]" href={`/`}>{e}</Link>
                        </div>
                    ))}
            </nav>
            {open && (
                <>
                    <div
                        className="hidden md:block absolute bg-black opacity-50 left-0 top-[68.5px] w-full h-[calc(100vh-68.5px)] z-9"
                        onClick={() => setOpen(false)}
                    ></div>
                </>
            )}
        </div>
    )
}

export default Menu

