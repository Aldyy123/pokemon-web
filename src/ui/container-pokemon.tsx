import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonAPi from "@/infra/usecases/pokemon.usecase";
import Loading from "./components/Loading";
import ListPokemon from "./list-pokemon.ui";
import { useFetchPokemonWithInfinityScroll } from "@/hooks/usePokemon";

export default function ContainerPokemon() {
    const PokemonClient = new PokemonAPi()
    const [hasMore, setHasMore] = useState(true)
    const { data, error, isLoading, fetchNextPage, isError } = useFetchPokemonWithInfinityScroll()

    if (isLoading) return <Loading />
    if (isError) return <p>Error: {error?.message}</p>

    return (
        <>
            {data?.pages?.map((pages, indexPages) => {
                const offset = data.pageParams[indexPages] || 0
                const offsetNumber = Number(offset)
                const lengthData = data.pages.length * 20
                if (lengthData > pages.count) {
                    setHasMore(false)
                }


                return (
                    <InfiniteScroll
                        dataLength={pages.count}
                        key={indexPages}
                        next={fetchNextPage}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                    >
                        <ListPokemon
                            offsetNumber={offsetNumber}
                            results={pages.results} />
                    </InfiniteScroll>

                )
            })}
        </>
    )
}