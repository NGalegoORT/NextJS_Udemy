import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({params}: Props):Promise<Metadata>{
        const { id } = await params;
        const pokemon = await getPokemon(id);

    return{
        title:`·${pokemon.id} - ${pokemon.name}`,
        description: `${pokemon.name} tiene ${pokemon.abilities}`
    }

}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache'
    });
    
    // ✅ Check response status before parsing JSON
    if (!resp.ok) {
        throw new Error(`Pokemon with id ${id} not found (${resp.status})`);
    }
    
    const pokemon = await resp.json();
    return pokemon;
};

export default async function PokemonPage({ params }: Props) {
    const { id } = await params;

        try{
  const pokemon = await getPokemon(id);
  

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">

        <div className="mt-5">
        <Link
        href={`/dashboard/pokemons`}
        className="border rounded-full py-2 px-4 text-xs font-semibold text-black-100"
        >
        Volver al listado!
        </Link>
        </div>


          <h1 className="pt-2 px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />


            <div className="flex flex-wrap">
              {
                pokemon.moves.map(move => (
                  <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {
                pokemon.types.map(type => (
                  <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {
                pokemon.weight
              }
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">

              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

            </div>
          </div>



        </div>
      </div>
    </div>
  );
  }catch{
    notFound()

  }
}


/* POR SI SE LLEGA A NECESITAR

export default async function PokemonPage({ params }: Props) {
    // ✅ Await params (Next.js 15+)
    const { id } = await params;

    try {
        const pokemon = await getPokemon(id);
        
        return (
            <>
                <div className="flex flex-col">
                    <h1>Pokemon {pokemon.id}</h1>
                    <div>{pokemon.name}</div>
                </div>
            </>
        );
    } catch (error) {
        // ✅ Show error UI instead of crashing
        return (
            <div className="flex flex-col">
                <h1>Error loading Pokémon</h1>
                <p>The Pokémon with ID "{id}" could not be found.</p>
            </div>
        );
    }
}*/