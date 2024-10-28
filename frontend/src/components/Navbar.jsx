import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-xl font-semibold text-blue-400">
                    Convocation System
                </h1>

                {/* Hamburger Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-400 hover:text-white focus:outline-none sm:hidden"
                >
                    {isOpen ? '✖' : '☰'}
                </button>

                

                {/* Links */}
                <div className={`sm:flex ${isOpen ? "block" : "hidden"} w-full sm:w-auto`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-3 sm:mt-0">
                        <a href="#" className="hover:text-blue-300 block py-1 sm:py-0">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-300 block py-1 sm:py-0">
                            Reserve a Seat
                        </a>
                        <a href="#" className="hover:text-blue-300 block py-1 sm:py-0">
                            Seating Map
                        </a>
                        <a href="#" className="hover:text-blue-300 block py-1 sm:py-0">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
