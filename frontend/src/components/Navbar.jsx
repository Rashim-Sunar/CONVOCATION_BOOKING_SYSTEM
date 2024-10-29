import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/vignanlogo.jpg'; // Adjust the path as needed

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchEvent, setSearchEvent] = useState("");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchEvent("");
    };

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <Link to="/"> {/* Updated to Link */}
                    <img src={logo} alt="Logo" className="h-10" />
                </Link>
            </div>

            <div className="flex flex-1 mx-4">
                <input
                    type="text"
                    placeholder="Search events......"
                    value={searchEvent}
                    onChange={(e) => setSearchEvent(e.target.value)}
                    className="flex-1 p-2 rounded-l-md border-2 border-gray-600 text-md text-black focus:outline-none focus:border-blue-500"
                />
                <button className="p-2 bg-blue-600 rounded-r-md hover:bg-blue-500 transition duration-200" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <button
                className="block md:hidden p-2 text-white focus:outline-none"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? '✖️' : '☰'}
            </button>

            <nav className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto z-10`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                    <li><Link to="/login" className="hover:underline">Sign In</Link></li> {/* Updated to Link */}
                    <li><Link to="/signup" className="hover:underline">Sign Up</Link></li> {/* Updated to Link */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
