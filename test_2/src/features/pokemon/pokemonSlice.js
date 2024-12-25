import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=152');
        return response.data.results;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        filteredPokemons: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        filterPokemons: (state, action) => {
            const filter = action.payload.toLowerCase();
            state.filteredPokemons = state.pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(filter)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemons = action.payload;
                state.filteredPokemons = action.payload; // Отображаем все покемоны по умолчанию
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { filterPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
