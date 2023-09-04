import PokemonAPi from "@/infra/usecases/pokemon.usecase";
import { useInfiniteQuery, useQuery } from "react-query";

const PokemonClient = new PokemonAPi()


export const useFetchPokemonWithInfinityScroll = () => {
    return useInfiniteQuery(
        ['pokemonList'],
        ({ pageParam = 0 }) => PokemonClient.getPokemonList(pageParam),
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.next) {
                    const url = new URL(lastPage.next!);
                    return url.searchParams.get('offset');
                }
                return undefined;
            },
        }
    );
};

export const usePokemonDetail = (query: string) => {
    return useQuery(['pokemonDetail', query], () => PokemonClient.getPokemonDetail(query), {
        enabled: query.length > 0,
        staleTime: Infinity,
        retry: false,
    });
};