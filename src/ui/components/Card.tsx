import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string;
    id: number;
    image: string;
}

export default function Card({
    name,
    id,
    image
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
            </Link>
        </>
    )
}