import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, filterPokemons } from './features/pokemon/pokemonSlice';
import PokemonCard from './components/PokemonCard';
import "./index.css"

const App = () => {
    const dispatch = useDispatch();
    const { filteredPokemons, status, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    const handleFilterChange = (e) => {
        dispatch(filterPokemons(e.target.value));
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
            }}
        >
            <h1>Pokémon List</h1>
            <input
                type="text"
                placeholder="Filter Pokémon by name..."
                onChange={handleFilterChange}
                style={{
                    marginBottom: '20px',
                    padding: '10px',
                    fontSize: '16px',
                    width: '300px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default App;
