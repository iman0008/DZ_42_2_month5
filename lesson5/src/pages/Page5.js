import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page5 = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                setLoading(true);
                const requests = Array.from({ length: 10 }, () => axios.get('https://api.kanye.rest'));
                const responses = await Promise.all(requests);
                const quotesData = responses.map((response) => response.data.quote);
                setQuotes(quotesData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!quotes.length) return <p>No quotes available</p>;

    return (
        <div>
            <h1>Random Kanye Quotes</h1>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <blockquote>
                            <p>"{quote}"</p>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page5;

