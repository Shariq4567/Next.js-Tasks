

export default function Posts({ title, date, desc }: { title: string, date: string, desc: string }) {
    return (
        <div className="h-[356px] min-w-[350px] w-[483px] bg-white p-[35px] flex flex-col gap-[36px]">
            <p className="text-[26px] font-bold">{title}</p>
            <p className="text-gray-600">{date}   |   Design, Pattern</p>
            <p className="text-gray-600">{desc}</p>
        </div>
    )
}
