import Link from "next/link"
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon"

interface Props{
    pokemon: SimplePokemon;
}


export const PokemonCard = ({pokemon}:Props) => {
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
                        href={`/`}
                        className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                        Conocer Mas!
                        </Link>
                    </div>
                    </div>
                    <div className="border-b">
                        <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">
                        
                                <div className="text-red-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M12 21s-6.5-4.35-9.5-8.28C-0.46 9.23 1.06 5.5 4.5 4.5c2.04-.6 4.14.26 5.5 1.86 1.36-1.6 3.46-2.46 5.5-1.86 3.44 1 4.96 4.73 2 8.22C18.5 16.65 12 21 12 21z"/>
                                </svg>

                                </div>
                                <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    No es favorito
                                </p>
                                </div>
                            
                        </Link>

                    </div>
                </div>
            </div>

)
}
