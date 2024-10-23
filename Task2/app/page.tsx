import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  
  const countries = ["japan", "germany", "india", "scotland", "russia"]

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 p-3 items-center gap-3">
      <p className="text-3xl text-white font-bold">Countries</p>
      {countries.map((country: string, index: number) => <div key={index}>
        <Link href={country}>
          <Button>{country[0].toUpperCase() + country.slice(1)}</Button>
        </Link>
      </div>)}
    </div>
  );
}
