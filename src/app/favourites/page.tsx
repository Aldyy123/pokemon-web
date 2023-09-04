"use client"
import { IPokemonEntity } from "@/domain/entities/pokemon.entity"
import LocalStorageDB from "@/infra/usecases/localstorage.usecase"
import Loading from "@/ui/components/Loading"
import ListPokemonFavourite from "@/ui/favourites-pokemon"
import { useEffect, useState } from "react"

export default function AboutPage() {
    const [favouriteData, setFavouriteData] = useState<IPokemonEntity[] | null>(null)
    useEffect(() => {
        const localStorageDb = new LocalStorageDB('pokemon')
        const data = localStorageDb.get()
        if (!data) {
            setFavouriteData([])
            return
        }
        setFavouriteData(data)
    }, [])

    if (favouriteData === null){
        return <Loading />
    }

    if (favouriteData.length === 0) return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl">You dont have any favourite pokemon</h1>
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