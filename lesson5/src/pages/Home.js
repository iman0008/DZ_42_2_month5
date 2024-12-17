import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to the Multi-API App</h1>
            <ul>
                <li><Link to="/page1" className="center-link">Cats</Link></li>
                <li><Link to="/page2" className="center-link">Dogs</Link></li>
                <li><Link to="/page3" className="center-link">Chuck Norris Jokes</Link></li>
                <li><Link to="/page4" className="center-link">Random User</Link></li>
                <li><Link to="/page5" className="center-link">Quotes</Link></li>
            </ul>
        </div>
    );
};

export default Home;
