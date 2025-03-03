import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightList from './components/FlightList';
import BookingForm from './components/BookingForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FlightList />} />
                <Route path="/book/:flightId" element={<BookingForm />} />
            </Routes>
        </Router>
    );
}

export default App;