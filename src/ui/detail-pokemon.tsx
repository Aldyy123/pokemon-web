import Image from "next/image";

interface DetailPokemonProps {
    pokemon: any
}

export default function DetailPokemon({
    pokemon
}: DetailPokemonProps){
    console.log(pokemon);
    return(
        <>
        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md p-4 max-w-2xl mt-10 mx-auto">
                <div className="text-center">
                    <Image
                        height={800}
                        width={800}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="mx-auto w-8/12"
                    />
                    <h1 className="text-3xl font-semibold mt-2">{pokemon.name}</h1>
                    <p className="text-gray-500 dark:text-gray-100"># {pokemon.id}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mt-10">Abilities</h2>
                    <ul className="list-disc list-inside mt-2">
                        {pokemon.abilities.map((ability: any) => (
                            <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Basic Info</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>Type: {pokemon.types.map((type: any) => type.type.name).join(', ')}</li>
                        <li>Height: {pokemon.height / 10} m</li>
                        <li>Weight: {pokemon.weight / 10} kg</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Stats</h2>
                    <ul className="mt-2">
                        {pokemon.stats.map((stat: any) => (
                            <li key={stat.stat.name}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </>
    )
}