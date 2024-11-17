'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Menu from "./Menu"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            // Hide on scroll down
            setShow(false);
        } else {
            // Show on scroll up
            setShow(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-white shadow-md 
                transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
                }`}>
            <div className="relative px-[1.875rem] md:px-[2rem] py-[10px] lg:py-[20px]
        flex items-center justify-between gap-8">
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
            </div>
        </header>
    )
}

export default Navbar