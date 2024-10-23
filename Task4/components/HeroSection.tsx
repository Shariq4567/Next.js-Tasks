import Image from "next/image";
import HeroImage from "@/public/hero-image.svg"
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <div className="my-[156px] w-full flex justify-center gap-[150px] mx-auto flex-wrap">
            <div className=" pl-[50px] max-w-[521px] flex flex-col gap-[30px]">
                <p className="text-[48px] font-extrabold text-pretty" style={{ color: "rgba(33, 36, 61, 1)", fontFamily: "Heebo" }}>Hi, I am John,<br />Creative Technologist</p>
                <p style={{ color: "rgba(33, 36, 61, 1)" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Button variant="destructive" className="bg-red-400 max-w-[205px] h-[50px] border-sm">Download Resume</Button>
            </div>
            <Image src={HeroImage} alt="Something" />
        </div>
    )
}
