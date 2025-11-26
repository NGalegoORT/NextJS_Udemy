import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import FavoritePokemon from "@/pokemons/components/FavoritePokemon";

export const metadata = {
  title: 'Favorite Pokemons',
  description: 'A list of my favorite pokemons',
}


export default async function PokemonPage() {

  return (
    <>
    <div className="flex flex-col">

      <span className="text-3xl my-2"> Pokemon Favoritos <br /><small>global state</small></span>

      <FavoritePokemon/>

    </div>
    </>
  )
}