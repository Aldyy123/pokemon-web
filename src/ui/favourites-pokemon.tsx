import Card from "./components/Card"

export default function ListPokemonFavourite({
    results
}: any) {

    return (
        <>
            <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {results.map((pokemon: any, index: number) => (
                    <Card
                        key={index}
                        id={pokemon.id}
                        image={pokemon.image}
                        name={pokemon.name}
                    />
                ))}
            </div>
        </>
    )
}