import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-[30px] pb-[27px] md:pt-[40px] md:pb-[36px] border-t-[1px]  border-grey'>
            <div className='pb-[30px] px-[40px] md:p-[50px] md:pt-0 border-b-[1px] border-grey'>
                <h2 className='arial text-[1.5rem]'>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>All Collections</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex items-center justify-center px-[15px] pt-[27px] md:px-[40px] md:pt-[40px]'>
                <p className='uppercase text-[.8rem] text-grey'>© 2023 City Threads | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer