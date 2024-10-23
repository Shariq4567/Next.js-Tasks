import Posts from "./Posts"

export default function RecentPosts() {
    return (
        <div className="w-full min-h-[502px] p-[26px]" style={{ backgroundColor: "#F4E2E2" }}>
            <div className="flex justify-between pl-[20px] lg:pl-[200px]">
                <p className="text-[22px] font-bold">Recent Posts</p>
                <p className="text-[22px] pr-[30px] font-bold text-red-500">View All</p>
            </div>
            <div className="flex justify-center gap-[52px] flex-wrap pt-[20px]">
                <Posts title="Making a design system from scratch" date="12 Feb 2020" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
                <Posts title="Making a design system from scratch" date="12 Feb 2020" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            </div>
        </div>
    )
}
