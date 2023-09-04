"use client";
import { usePokemonDetail } from "@/hooks/usePokemon"
import Loading from "@/ui/components/Loading";
import DetailPokemon from "@/ui/detail-pokemon";

interface PageProps {
    params: {
        name: string
    }
}

export default function Page({
    params
}: PageProps) {
    const { data: pokemon, error, isLoading, isError } = usePokemonDetail(params.name)
    
    if (isLoading) return <Loading />
    if (isError) return <p>Error: {error?.message}</p>

    return (
        <>
            <DetailPokemon pokemon={pokemon} />
        </>
    )
}