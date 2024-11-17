'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
const Menu = () => {
    const headHeight = '68.5px'
    const [open, setOpen] = useState(false)
    const links = ['Home', 'All Collections', 'Contact']
    return (
        <div>
            {open ? <TfiClose
                className="cursor-pointer w-[1.3rem] h-[1.3rem]"
                onClick={() => setOpen(prev => !prev)}
            />
                :
                <SlMenu
                    className="cursor-pointer w-[1.3rem] h-[1.3rem]"
                    onClick={() => setOpen(prev => !prev)}
                />}

            <nav className={`absolute top-[var(--headHeight)] bg-white w-full 
            md:w-[399px] h-[calc(100vh-var(--headHeight))] py-[1rem] 
            flex flex-col gap-[.2rem] z-10 text-xl links` + (open ? ' active no-scroll' : '')}
                style={{ '--headHeight': headHeight }}
            >
                <div className="link-hover">
                    <Link
                        className={`flex items-center py-[.5rem] 
                            px-[2rem] text-[1.2rem]`}
                        href={`/`}
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>
                </div>
                <div className="link-hover">
                    <Link
                        className={`flex items-center py-[.5rem] 
                            px-[2rem] text-[1.2rem]`}
                        href={`/collections`}
                        onClick={() => setOpen(false)}
                    >
                        All Collections
                    </Link>
                </div>
                <div className="link-hover">
                    <Link
                        className={`flex items-center py-[.5rem] 
                            px-[2rem] text-[1.2rem]`}
                        href={`/contact`}
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
                <div className="link-hover md:hidden">
                    <Link className={`flex items-center py-[.5rem] px-[2rem] text-[1.2rem]`} href={`/`}>{'Login'}</Link>
                </div>
            </nav>
            {
                open && (
                    <>
                        <div
                            className={`hidden md:block absolute 
                                left-0 top-[var(--headHeight)] w-full h-[calc(100vh-var(--headHeight))] z-9`}
                            style={{ '--headHeight': headHeight, backgroundColor: '#12121280' }}
                            onClick={() => setOpen(false)}
                        ></div>
                    </>
                )
            }
        </div >
    )
}

export default Menu

