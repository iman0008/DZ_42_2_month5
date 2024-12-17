import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page1 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get('https://api.thedogapi.com/v1/images/search?limit=10')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Random Dogs</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {}
                {data.map((dog, index) => (
                    <img
                        key={index}
                        src={dog.url}
                        alt="Random Dog"
                        style={{ width: '300px', height: '300px', margin: '10px', borderRadius: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page1;

