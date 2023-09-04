"use client";
import { usePokemonDetail } from "@/hooks/usePokemon"
import Loading from "@/ui/components/Loading";
import DetailPokemon from "@/ui/detail-pokemon";
import Image from "next/image";

interface PageProps {
    params: {
        name: string
    }
}

export default function Page({
    params
}: PageProps) {
    const { data: pokemon, error, isLoading, isError } = usePokemonDetail(params.name)
    console.log(pokemon);
    
    if (isLoading) return <Loading />
    if (isError) return <p>Error: {error?.message}</p>

    return (
        <>
            <DetailPokemon pokemon={pokemon} />
        </>
    )
}