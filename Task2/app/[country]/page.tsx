import CountryDetailCard from "@/components/CountryDetailCard"
import CountryNotFound from "@/components/CountryNotFound"

export default function Country({ params }: { params: { country: string } }) {

    const countryParam = params.country

    const countryObject = [{
        name: "japan",
        population: "125.1 million",
        capital: "Tokyo"
    }, {
        name: "germany",
        population: "83.8 million",
        capital: "Berlin"
    }, {
        name: "india",
        population: "1.42 billion",
        capital: "New Delhi"
    }, {
        name: "scotland",
        population: "5.45 million",
        capital: "Edinburgh"
    }, {
        name: "russia",
        population: "144.3 million",
        capital: "Moscow"
    }]


    let country: { name: string, population: string, capital: string } = {
        name: "",
        population: "",
        capital: ""
    }

    countryObject.map((object) => {
        if (object.name === countryParam) country = object
    })

    return (
        country.name ? <CountryDetailCard name={country.name} population={country.population} capital={country.capital} /> : <CountryNotFound />

    )
}