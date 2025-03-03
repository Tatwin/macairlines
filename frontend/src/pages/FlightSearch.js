import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './FlightSearch.css';

const FlightSearch = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/flights')
             .then(response => setFlights(response.data))
             .catch(err => console.log(err));
    }, []);

    return (
        <div className="flight-search">
            <Navbar />
            <h1>Available Flights</h1>
            <div className="flight-list">
                {flights.map(flight => (
                    <div key={flight._id} className="flight-card">
                        <h2>{flight.flightNumber}</h2>
                        <p>{flight.origin} to {flight.destination}</p>
                        <p>Price: ₹{flight.price}</p>
                        <button>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlightSearch;