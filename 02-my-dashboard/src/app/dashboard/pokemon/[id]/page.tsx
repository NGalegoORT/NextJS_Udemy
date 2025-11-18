import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
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
}