import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <h1>Welcome to MacAirlines</h1>
                <p>Your journey begins here.</p>
            </div>
        </div>
    );
};

export default Home;