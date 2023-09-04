import { useInfiniteQuery } from "react-query"
import PokemonAPi from "../usecases/pokemon.usecase"
import Card from "./components/Card"

export default function ListPokemon() {
    const PokemonClient = new PokemonAPi()
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
        'getPokemon',
        ({ pageParam }) => PokemonClient.getPokemon({ pageParam }),
        {
            getNextPageParam: (lastPage, allPages) => {
                if (!lastPage.next) return 0
                const offset = lastPage.next.split('https://pokeapi.co/api/v2/pokemon?offset=')[1].split('&limit=')[0]
                return offset
            },
        })
    // console.log(error);
    console.log(data);
    return (
        <>
            {data?.pages?.map((pages, indexPages) => {
                const offset = data.pageParams[indexPages]

                return pages.results.map((pokemon: any, index: number) => {
                    return (
                        <Card
                            key={index}
                            index={index}
                            offset={offset}
                            pokemon={pokemon}
                        />
                    )
                })
            })}
            <button
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
            </button>
        </>
    )
}