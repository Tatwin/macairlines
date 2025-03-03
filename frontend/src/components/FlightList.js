import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/flights')
             .then(response => setFlights(response.data))
             .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Flights</h1>
            <ul>
                {flights.map(flight => (
                    <li key={flight._id}>
                        {flight.flightNumber} - {flight.origin} to {flight.destination}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;