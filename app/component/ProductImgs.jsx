'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductImgs = ({ product }) => {
    const [mainProductImg, setMainProductImg] = useState({
        src: `/${product.type}-1.jpg`,
        alt: `${product.name} main image`,
    });

    let restProducts = [];
    for (let i = 0; i < product.count; i++) {
        restProducts.push(
            <Image
                className="max-w-[50px] cursor-pointer"
                key={`${product.type}-${i}`}
                src={`/${product.type}-${i + 1}.jpg`}
                alt={`${product.name} image ${i + 1}`}
                width={50}
                height={50}
                onClick={() =>
                    setMainProductImg({
                        src: `/${product.type}-${i + 1}.jpg`,
                        alt: `${product.name} image ${i + 1}`,
                    })
                }
            />
        );
    }

    const [moreImg, setMoreImg] = useState(false);

    return (
        <>
            <Image
                className='w-full'
                src={mainProductImg.src}
                alt={mainProductImg.alt}
                width={500}
                height={500}
                priority // Optional for performance
            />
            <div className="flex flex-col mt-2">
                <div
                    className={`w-full flex gap-3 items-center flex-wrap`}
                >
                    {restProducts}
                </div>
                {/* <button
                    className="block md:hidden w-full mt-2 p-3 border-[1px] border-stone-950 text-center"
                    onClick={() => setMoreImg((prev) => !prev)}
                >
                    {moreImg ? 'Show less' : 'Show more'}
                </button> */}
            </div>
        </>
    );
};

export default ProductImgs;
