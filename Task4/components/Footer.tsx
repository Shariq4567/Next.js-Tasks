'use client'
import Image from "next/image"
import FacebookIcon from "@/public/facebook-icon.svg"
import InstagramIcon from "@/public/instagram-icon.svg"
import LinkedInIcon from "@/public/linkedIn-icon.svg"
import TwitterIcon from "@/public/twitter-icon.svg"


export default function Footer() {
    return (
        <footer className="w-full h-[200px] flex flex-col gap-[37px] pt-[50px] items-center">
            <div className="flex gap-[53px]">
                <Image src={FacebookIcon} alt="Facebook Icon" />
                <Image src={InstagramIcon} alt="Instagram Icon" />
                <Image src={TwitterIcon} alt="Twitter Icon" />
                <Image src={LinkedInIcon} alt="LinkedIn Icon" />
            </div>
            <p className="text-[22px] font-bold">Copyright ©2020 All rights reserved </p>
        </footer>
    )
}
