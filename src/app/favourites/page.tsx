"use client"
import { IPokemonEntity } from "@/domain/entities/pokemon.entity"
import LocalStorageDB from "@/infra/usecases/localstorage.usecase"
import ListPokemonFavourite from "@/ui/favourites-pokemon"
import { useEffect, useState } from "react"

export default function AboutPage() {
    const localStorageDb = new LocalStorageDB('pokemon')
    const [favouriteData, setFavouriteData] = useState<IPokemonEntity[]>([])
    useEffect(() => {
        const data = localStorageDb.get()
        if (!data) return
        setFavouriteData(data)
    }, [])


    if (favouriteData.length === 0) return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl">You don't have any favourite pokemon</h1>
        </div>
    )

    return (
        <>
            <main className='container mx-auto mt-10'>
                <ListPokemonFavourite results={favouriteData} />
            </main>
        </>
    )
}