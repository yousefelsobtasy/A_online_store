'use client'
import Link from "next/link";
import SearchBar from "./SearchBar"
import { useState, useEffect, useRef } from "react"
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";

const NavIcons = () => {
    // const inputRef = useRef();
    // const [searchOpen, setSearchOpen] = useState(false);

    // useEffect(() => {
    //     if (searchOpen) {
    //         inputRef.current.focus();
    //     }
    // }, [searchOpen])
    return (<>
        <div className="w-1/3 flex items-center justify-end gap-4 text-[1.4rem]">
            {/* <div onClick={() => setSearchOpen(true)} >
                <SearchBar />
            </div>
            <Link href='/account'>
                <VscAccount className="cursor-pointer hidden md:block" />
            </Link> */}
            <Link href='/cart'>
                <IoCartOutline className="cursor-pointer" />
            </Link>
        </div>
        {/* <div
            className={`searchBar ${searchOpen ? ' active' : ''} w-full h-[68.5px] absolute left-0 bg-white
        flex items-center justify-center gap-5 z-10 
        `}
        >
            <label for="search">Search:</label>
            <input ref={inputRef} type="search" id="search" name="search"
                className="w-[50%] h-[2.5rem] border-[1px] border-gray-700 rounded-[.5rem] px-2"
            />
            <TfiClose className="cursor-pointer" onClick={() => setSearchOpen(false)} />
        </div>
        <div
            className={`${searchOpen ? 'no-scroll' : 'hidden'} absolute top-[68.5px] left-0 w-full h-[calc(100vh-68.5px)]`}
            style={{ backgroundColor: '#12121280' }}
            onClick={() => setSearchOpen(false)}
        ></div> */}
    </>

    )
}

export default NavIcons