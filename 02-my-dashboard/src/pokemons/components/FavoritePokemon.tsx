'use client'
import { useAppSelector } from "@/store"
import { PokemonGrid} from "./PokemonGrid"


const FavoritePokemon = () => {

    const favoritePokemons = useAppSelector(state => Object.values (state.pokemons))

  return (
      <PokemonGrid pokemons={favoritePokemons}/>
    )
}

export default FavoritePokemon