import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ flightId }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/bookings', { flightId, name })
             .then(response => alert('Booking successful!'))
             .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Book Flight</button>
        </form>
    );
};

export default BookingForm;