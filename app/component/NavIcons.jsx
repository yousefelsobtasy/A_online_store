'use client';

import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState, useEffect, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";

const NavIcons = () => {
    const inputRef = useRef();
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        if (searchOpen) {
            inputRef.current?.focus();
        }
    }, [searchOpen]);

    return (
        <>
            <div className="w-1/3 flex items-center justify-end gap-4 text-[1.7rem]">
                <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setSearchOpen(true)}
                    aria-label="Open search bar"
                >
                    <SearchBar />
                </button>
                <Link href="/account">
                    <button
                        className="cursor-pointer hidden md:flex items-center"
                        aria-label="Go to account page"
                    >
                        <VscAccount />
                    </button>
                </Link>
                <Link href="/cart">
                    <button
                        className="cursor-pointer flex items-center relative"
                    // aria-label={`Cart, ${cart.length > 0 ? cart[0].count : 0} items`}
                    >
                        <IoCartOutline />
                        <div
                            id="cartCount"
                            className={`absolute top-[-.2rem] right-[-.2rem] w-[1rem] h-[1rem] p-[.2rem] text-[.8rem]
                                bg-red-500 text-white rounded-full flex justify-center items-center`}
                            style={{ display: 'none' }}
                            aria-live="polite"
                        >
                        </div>
                    </button>
                </Link>
            </div>
            {/* Search form */}
            <form
                className={`searchBar ${searchOpen ? "active" : ""} w-full h-[68.5px] absolute left-0 bg-white
                    flex items-center justify-center gap-5 z-10`}
                role="search"
                aria-hidden={!searchOpen}
            >
                <label htmlFor="search">Search:</label>
                <input
                    ref={inputRef}
                    type="search"
                    id="search"
                    name="search"
                    className="w-[50%] h-[2.5rem] border-[1px] border-gray-700 rounded-[.5rem] px-2"
                    placeholder="Search..."
                    aria-label="Search products"
                />
                <button
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setSearchOpen(false);
                    }}
                    aria-label="Close search bar"
                >
                    <TfiClose />
                </button>
            </form>
            {/* Overlay */}
            <div
                className={`${searchOpen ? "no-scroll" : "hidden"} absolute top-[68.5px] left-0 w-full h-[calc(100vh-68.5px)]`}
                style={{ backgroundColor: "#12121280" }}
                onClick={() => setSearchOpen(false)}
                aria-hidden={!searchOpen}
            ></div>
        </>
    );
};

export default NavIcons;
