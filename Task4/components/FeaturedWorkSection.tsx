import FeaturedWorkPosts from "./FeaturedWorkPosts"
import featuredPicture1 from "@/public/featuredWork-picture1.svg"
import featuredPicture2 from "@/public/featuredWork-picture2.svg"
import featuredPicture3 from "@/public/featuredWork-picture3.svg"


export default function FeaturedWorkSection() {
    return (
        <div className="w-full min-h-[1070px] flex justify-center items-center">
            <div className="w-[920px] min-h-[935px] flex flex-col gap-[32px] py-[80px] ">
                <p className="text-[22px] pl-[30px] font-semibold">Featured works</p>
                <div className="mx-auto flex flex-col gap-[200px] lg:gap-[110px]">
                    <FeaturedWorkPosts image={featuredPicture1} title="Designing Dashboards" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." year="2020" />
                    <FeaturedWorkPosts image={featuredPicture2} title="Designing Dashboards" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." year="2020" />
                    <FeaturedWorkPosts image={featuredPicture3} title="Designing Dashboards" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." year="2020" />
                </div>
            </div>
        </div>
    )
}
