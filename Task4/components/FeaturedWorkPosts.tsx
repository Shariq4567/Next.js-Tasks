import Image from "next/image"

export default function FeaturedWorkPosts({ image, title, year, desc }: { image: string, title: string, year: string, desc: string }) {
    return (
        <div className="flex gap-[30px] flex-wrap lg:flex-nowrap">
            <Image className="mx-auto my-auto" src={image} alt="Featured Work Image" />
            <div className="w-[350px] h-[180px] flex flex-col gap-[22px] mx-auto lg:w-full">
                <p className="text-[30px] text-center font-bold lg:text-start">{title}</p>
                <div className="flex gap-[23px] justify-center lg:justify-start">
                    <div className="w-[68px] h-[24px] rounded-full flex justify-center items-center text-white text-[18px] font-bold" style={{ backgroundColor: "rgba(249, 133, 133, 1)" }}>{year}
                    </div>
                    <p className="text-[20px] text-gray-500">Dashboard</p>
                </div>
                <p className="text-[18px] w-[350px] lg:w-full">{desc}</p>
            </div>
        </div>
    )
}
