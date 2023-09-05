import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./components/Loading";
import ListPokemon from "./list-pokemon.ui";
import { useFetchPokemonWithInfinityScroll } from "@/hooks/usePokemon";
import Error from "next/error";
import Card from "./components/Card";
import PokemonFilter from "./FilterPokemon";

export default function ContainerPokemon() {
    const [selectedType, setSelectedType] = useState('all');
    const { data, isLoading, fetchNextPage, isError, hasNextPage, isFetching } = useFetchPokemonWithInfinityScroll()

    const handleTypeChange = useCallback((type: string) => {
        setSelectedType(type);
    }, [])

    if (isLoading) return <Loading />
    if (isError) return <Error statusCode={400} />


    return (
        <>
            <div className="px-10 mb-44">
                {/* <h1 className="text-4xl text-gray-950 dark:text-gray-100 font-semibold mt-2 text-center">Pokemon List</h1> */}
                <div className="fixed w-full left-0 px-10 md:left-auto top-20">
                    <PokemonFilter selectedType={selectedType} onChange={handleTypeChange} />
                </div>
            </div>
            {data?.pages?.map((pages, indexPages) => {
                const offset = data.pageParams[indexPages] || 0
                const offsetNumber = Number(offset)
                const lengthData = data.pages.length * 20



                return (
                    <InfiniteScroll
                        dataLength={pages.count}
                        key={indexPages}
                        next={fetchNextPage}
                        hasMore={hasNextPage || false}
                        loader={<h4 className={isFetching ? 'inline-block' : 'hidden'}>Loading...</h4>}
                        className="px-10 mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {pages.results.map((pokemon: any, index: number) => (
                            <ListPokemon
                                key={index}
                                types={selectedType}
                                pokemon={pokemon}
                            />
                        ))}
                    </InfiniteScroll>

                )
            })}
        </>
    )
}