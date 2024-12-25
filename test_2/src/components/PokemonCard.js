import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.get(pokemon.url);
            setDetails(response.data);
        };
        fetchDetails();
    }, [pokemon.url]);

    if (!details) return <p>Loading...</p>;

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                width: '150px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <img
                src={details.sprites.front_default}
                alt={pokemon.name}
                style={{ width: '100px', height: '100px' }}
            />
            <h3>{pokemon.name}</h3>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
        </div>
    );
};

export default PokemonCard;
