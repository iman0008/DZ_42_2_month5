import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page4 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10')
            .then((response) => {
                setUsers(response.data.results);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Random Users</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {users.map((user, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                        <img src={user.picture.large} alt={user.name.first} style={{ borderRadius: '50%' }} />
                        <p>Name: {user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page4;
