// Navbar.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import SixthGradeSubjectList from './SixthGradeSubjectList';
import LoginForm from './LoginForm';

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <h1 className="navbar-logo">NFC Education</h1>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                {/* Add other routes here */}
            </Routes>
        </BrowserRouter>
    );
};

export default Navbar;