import Image from "next/image";
import Link from "next/link";

interface Props {
    pokemon: any;
    index: number;
}

export default function Card({
    pokemon,
    index,
}: Props) {
    
    
    return (
        <>
            <Link href={`/pokemon/${pokemon.name}`} className="bg-gray-300 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <Image
                    height={1000}
                    priority
                    width={1000}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={`Pokemon ${index + 1}`}
                    className="mx-auto"
                />
                <h2 className="text-xl text-gray-950 dark:text-gray-100 font-semibold mt-2">
                    {pokemon.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">ID: {(index  + 1)}</p>
            </Link>
        </>
    )
}