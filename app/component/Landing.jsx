import Image from "next/image"

const Landing = () => {
    return (
        <div className="w-full mt-[62.72px]">
            <Image src="/landing.png" alt="landing" width={500} height={500} layout="responsive" />
        </div>
    )
}

export default Landing