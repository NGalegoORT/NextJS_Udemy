'use client'

import Link from "next/link"
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props{
    pokemon: SimplePokemon;
}


export const PokemonCard = ({pokemon}:Props) => {

    const {id, name} = pokemon;
    const isFavorite = useAppSelector( state => !!state.pokemons[id]);
    const dispatch = useAppDispatch()
    const onToggle = () =>{
        dispatch(toggleFavorite(pokemon))
    }

  return (
<div className="mx-auto right-0 mt-2 w-60">
                <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                    key={pokemon.id} 
                    src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                    <div className="mt-5">
                        <Link
                        href={`/dashboard/pokemon/${pokemon.name}`}
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Conocer Mas!
                        </Link>
                    </div>
                    </div>
                    <div className="border-b">
                        <div onClick={onToggle}
                        className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
                        
                                <div className="text-red-600">
                                    {
                                        isFavorite
                                        ?
                                       <svg
                                        viewBox="0 0 24 24"
                                        fill="red"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        >
                                        <path d="M12.001 4.529c2.349-2.532 6.432-2.532 8.78 0 2.348 2.53 2.348 6.634 0 9.165L12 22 3.22 13.694c-2.348-2.53-2.348-6.634 0-9.165 2.348-2.532 6.431-2.532 8.78 0z"/>
                                        </svg>
   
                                        :
                                        <svg
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        >
                                        <path d="M12.001 4.529c2.349-2.532 6.432-2.532 8.78 0 2.348 2.53 2.348 6.634 0 9.165L12 22 3.22 13.694c-2.348-2.53-2.348-6.634 0-9.165 2.348-2.532 6.431-2.532 8.78 0z"/>
                                        </svg>                                   
                                    }
                               

                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {
                                        isFavorite
                                        ? 'Es Favorito'
                                        : 'No es Favorito'
                                    }
                                </p>
                                <p className="text-xs text-gray-500">Click para cambiar</p>
                                </div>
                            
                        </div>

                    </div>
                </div>
            </div>

)
}
