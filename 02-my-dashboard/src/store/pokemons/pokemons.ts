import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
   /* '1': { id: '1', name: 'bulbasaur'},
    '3': { id: '3', name: 'venusaur'},
    '8': { id: '8', name: 'wartortle'},
    '11': { id: '11', name: 'metapod'},
    */
   }

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const{id} = pokemon;

        if(!!state[id]){
            delete state[id];
            return;
        }

        state[id] = pokemon;
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer