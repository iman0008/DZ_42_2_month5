import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page3 = () => {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchJokes = async () => {
            try {
                const jokesArray = [];
                for (let i = 0; i < 10; i++) {
                    const response = await axios.get('https://api.chucknorris.io/jokes/random');
                    jokesArray.push(response.data.value);
                }
                setJokes(jokesArray);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jokes:', error);
                setLoading(false);
            }
        };

        fetchJokes();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <ul>
                {}
                {jokes.map((joke, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{joke}</li>
                ))}
            </ul>
        </div>
    );
};

export default Page3;
