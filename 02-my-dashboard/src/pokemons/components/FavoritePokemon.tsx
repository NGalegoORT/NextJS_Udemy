'use client'
import { useAppSelector } from "@/store"
import { PokemonGrid} from "./PokemonGrid"
import { useEffect, useState } from "react"


const FavoritePokemon = () => {

    const favoritePokemons = useAppSelector(state => Object.values (state.pokemons.favorites))

  return (
      //<PokemonGrid pokemons={favoritePokemons}/>
      <>
      {
        favoritePokemons.length === 0
        ? <NoFavorites/>
        : <PokemonGrid pokemons={favoritePokemons}/>
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