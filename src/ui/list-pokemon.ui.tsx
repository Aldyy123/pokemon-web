import Card from "./components/Card"

export default function ListPokemon({
    results
}: any) {

    return (
        <>
            <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {results.map((pokemon: any, index: number) => (
                    <Card
                        key={index}
                        id={index + 1}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                        name={pokemon.name}
                    />
                ))}
            </div>
        </>
    )
}