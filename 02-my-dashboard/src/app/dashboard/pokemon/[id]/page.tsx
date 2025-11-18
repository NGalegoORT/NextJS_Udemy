interface Props {
    // `params` can be a Promise in some Next.js setups (concurrent rendering).
    // Allow either the direct object or a Promise so we can `await` it safely.
    params: { id: string } | Promise<{ id: string }>;
}

export default async function PokemonPage({ params }: Props) {
    // unwrap params if Next.js passed a Promise
    const { id } = await params;

    return (
        <>
            <div className="flex flex-col">
                <h1>Pokemon {id}</h1>
            </div>
        </>
    );
}