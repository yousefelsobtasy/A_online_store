'use client'
import { useState } from "react";
import ProductImgs from "../component/ProductImgs";
import ProductText from "./../component/ProductText";

export default function SinglePage({ params }) {

    const product = params.slug === 'T-shirt' ? {
        name: 'Long Sleeve T-shirt',
        price: 'L.E 650.00 EGP',
        type: 'top',
        count: 8
    } : params.slug === 'SweetPants' ? {
        name: 'Cream SweetPants',
        price: 'L.E 790.00 EGP',
        type: 'pant',
        count: 6
    } : 'Error';


    return params.slug === 'T-shirt' || params.slug === 'SweetPants' ? (
        <div className="flex flex-col md:flex-row gap-10 w-full py-[40px] px-[15px] lg:px-[50px] max-w-[1200px] mx-auto">
            <div className="w-full md:w-1/2">
                <ProductImgs product={product} />
            </div>
            <div className="w-full md:w-1/2 ">
                <ProductText product={product} />
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <h2 className="text-[2rem]">404</h2>
            <p className="text-[1rem]">Page not found</p>
        </div>
    )
}