import Image from "next/image"
import Link from "next/link"

const Landing = () => {
    return (<>
        <div className="w-full">
            <Image src="/landing.png" alt="landing" width={500} height={500} layout="responsive" />
        </div>
        <div className="w-full py-[40px] px-[15px] lg:px-[50px] max-w-[1200px] mx-auto">
            <h2 className="text-[1.5rem] md:text-[2rem] mb-[40px] px-[20px] font-bold tracking-wider">Winter Collection</h2>
            <div className="grid grid-cols-2 grid-rows-1 gap-2">
                <div className="col-span-1 row-span-1 px-1">
                    <Link className="productImgContainer" href={'/SweetPants'}>
                        <Image className="productImg" src={'/pant-9.jpg'} alt="SweetPants" width={500} height={500} layout="responsive" />
                        <Image className="productImgHover" src={'/pant-2.jpg'} alt="SweetPants" width={500} height={500} layout="responsive" />
                    </Link>
                    <div className={`flex flex-col justify-between gap-3 my-[20px]`}>
                        <p className="text-xs">Cream SweetPants</p>
                        <h3 className="font-bold">L.E 790.00 EGP</h3>
                        <Link href={'/SweetPants'} className="w-full">
                            <button className="w-full border-[1px] border-stone-950 text-center p-3">
                                Choose Options
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 px-1">
                    <Link className="productImgContainer" href={'/T-shirt'}>
                        <Image className="productImg" src={'/top-11.jpg'} alt="T-shirt" width={500} height={500} layout="responsive" />
                        <Image className="productImgHover" src={'/top-15.jpg'} alt="T-shirt" width={500} height={500} layout="responsive" />
                    </Link>
                    <div className={`flex flex-col justify-between gap-3 my-[20px]`}>
                        <p className="text-xs">Long Sleeve T-shirt</p>
                        <h3 className="font-bold">L.E 650.00 EGP</h3>
                        <Link href={'/T-shirt'} className="w-full">
                            <button className="w-full border-[1px] border-stone-950 text-center p-3">
                                Choose Options
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}

export default Landing