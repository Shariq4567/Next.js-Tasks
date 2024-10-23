export default function CountryDetailCard({ name, population, capital }: { name: string, population: string, capital: string }) {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-700 to-gray-600 flex justify-center items-center">
            <div className="flex flex-col gap-5 bg-gradient-to-tr from-slate-900 to-slate-800 p-7 rounded-xl">
                <p className="text-3xl font-semibold text-white">Name: {name[0].toUpperCase() + name.slice(1)}</p>
                <p className="text-3xl font-semibold text-white">Population: {population}</p>
                <p className="text-3xl font-semibold text-white">Capital: {capital}</p>
            </div>
        </div>
    )
}