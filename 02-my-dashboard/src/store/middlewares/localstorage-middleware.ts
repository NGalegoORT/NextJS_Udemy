import { Middleware } from '@reduxjs/toolkit';

// Middleware that persists the `pokemons` slice to localStorage (client-side only).
// It is important to forward the action by calling `next(action)` so reducers run.
export const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    // previous state (optional logging)
    // const prev = storeAPI.getState();

    // forward the action to the next middleware / reducer
    const result = next(action);

    // after reducers have run, persist the pokemons slice if running in the browser
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const state = storeAPI.getState();
            // Persist only the pokemons slice to avoid saving the whole store
            if (state?.pokemons) {
                localStorage.setItem('pokemons', JSON.stringify(state.pokemons));
            }
        }
    } catch (err) {
        // Fail silently but log for debugging
        // eslint-disable-next-line no-console
        console.error('localStorageMiddleware error while saving state', err);
    }

    return result;
};