import { usePokemonTypesList } from '@/hooks/usePokemon';
import React from 'react';
import Loading from './components/Loading';
import Error from 'next/error';

const PokemonFilter = ({ selectedType, onChange }: any) => {
    const { data, isLoading, isError } = usePokemonTypesList()

    if (isLoading) return <Loading />
    if (isError) return <Error statusCode={400} />

    return (
        <div className="my-4 flex lg:w-1/4 sm:w-3/4">
            <label className="mr-2 w-full">Filter by Type:</label>
            <select
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedType}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="all">All</option>
                {data.results?.map((type: any) => (
                    <option key={type.name} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PokemonFilter;
