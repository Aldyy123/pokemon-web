"use client";
import { usePokemonDetail } from "@/hooks/usePokemon"
import Loading from "@/ui/components/Loading";
import DetailPokemon from "@/ui/detail-pokemon";
import Error from "next/error";

interface PageProps {
    params: {
        name: string
    }
}

export default function Page({
    params
}: PageProps) {
    const { data: pokemon, isLoading, isError } = usePokemonDetail(params.name)
    
    if (isLoading) return <Loading />
    if (isError) return <Error statusCode={400} />

    return (
        <>
            <DetailPokemon pokemon={pokemon} />
        </>
    )
}