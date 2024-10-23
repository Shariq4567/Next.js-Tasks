
export default function Navbar() {

    return (
        <nav className="w-full">
            <div className="flex mr-[69px] mt-[67px] justify-end gap-[52px]" style={{ fontFamily: "Arial" }}>
                <p className="text-[20px] hover:cursor-pointer ">Works</p>
                <p className="text-[20px] hover:cursor-pointer">Blog</p>
                <p className="text-[20px] hover:cursor-pointer">Contact</p>
            </div>
        </nav>
    )
}