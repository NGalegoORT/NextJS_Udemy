import { Pokemon } from "@/pokemons";
interface Props {
    params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> =>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache:'force-cache'
    }).then(resp =>resp.json());
    return pokemon;
}

export default async function PokemonPage({ params }: Props) {
    // unwrap params if Next.js passed a Promise
    const { id } = await params;

    const pokemon =  await getPokemon(id)


    return (
        <>
            <div className="flex flex-col">
                <h1>Pokemon {id}</h1>
                <div>{JSON.stringify(pokemon)}</div>
            </div>
        </>
    );
}