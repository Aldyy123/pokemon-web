import { usePokemonDetail } from "@/hooks/usePokemon"
import Card from "./components/Card"
import Loading from "./components/Loading"
import Error from "next/error"

export default function ListPokemon({
    pokemon,
    types
}: any) {    
    const { data, isLoading, isError } = usePokemonDetail(pokemon.name)
    if (isLoading) return <Loading screen={false} />
    if (isError) return <Error statusCode={400} />

    const isFilter = data?.types?.some((type: any) => type.type.name === types)

    if(!isFilter && types !== 'all') return null
    
    return (
        <>
            <Card
                types={data?.types}
                id={data.id}
                // image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                image={data.sprites.other["official-artwork"].front_default}
                name={pokemon.name}
            />
        </>
    )
}