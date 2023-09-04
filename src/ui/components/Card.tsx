import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string;
    id: number;
    image: string;
    types: any[];
}

export default function Card({
    name,
    id,
    image,
    types
}: Props) {


    return (
        <>
            <Link href={`/pokemon/${name}`} className="bg-gray-300 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <Image
                    height={1000}
                    priority
                    width={1000}
                    src={image}
                    alt={`Pokemon ${id} - ${name}`}
                    className="mx-auto"
                />
                <h2 className="text-xl text-gray-950 dark:text-gray-100 font-semibold mt-2">
                    {name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">ID: {id}</p>
                <div className="flex gap-5 mt-3">
                    {types?.map((type: any, index: number) => (
                        <p key={index} className="py-1 px-3 bg-violet-500 rounded text-gray-100">{type.type.name}</p>
                    ))}
                </div>
            </Link>
        </>
    )
}