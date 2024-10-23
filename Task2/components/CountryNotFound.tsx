import Link from "next/link"
import { Button } from "./ui/button"

export default function CountryNotFound() {
    return (
        <div className="bg-slate-600 flex justify-center items-center w-full h-screen flex-col gap-5">
            <p className="text-4xl text-white font-bold">Country does not exist</p>
            <Link href="/">
                <Button variant="link" className="text-white">
                    Back to Home page
                </Button>
            </Link>
        </div>
    )
}