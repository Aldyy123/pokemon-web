"use client"
import ListPokemon from '@/infra/ui/list-pokemon.ui'

export default function Home() {
  return (
    <>
      <main className='container px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-10'>
        <ListPokemon />      
      </main>
    </>
  )
}
