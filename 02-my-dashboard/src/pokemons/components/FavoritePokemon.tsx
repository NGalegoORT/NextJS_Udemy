'use client'
import { useAppSelector } from "@/store"
import { PokemonGrid} from "./PokemonGrid"
import { useState } from "react"


const FavoritePokemon = () => {

    const favoritePokemons = useAppSelector(state => Object.values (state.pokemons))
    const [pokemons, setPokemons] = useState( favoritePokemons );

  return (
      //<PokemonGrid pokemons={favoritePokemons}/>
      <>
      {
        pokemons.length === 0
        ? <NoFavorites/>
        : <PokemonGrid pokemons={pokemons}/>
      }
        
      </>
    )
}

export default FavoritePokemon

export const NoFavorites = () =>{
  return(
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <span>No Hay Favoritos</span>
    </div>
  )
}