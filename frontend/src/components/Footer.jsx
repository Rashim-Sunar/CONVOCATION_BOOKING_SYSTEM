import React from 'react';
import globeIcon from '../assets/globe-icon.svg'; // Adjust the import path as necessary

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto">
                {/* Footer Sections */}
                <ul className="list-none w-full md:w-1/5 mb-4 text-center md:text-left">
                    <li className="font-bold text-lg mb-2">Features</li>
                    <li className="mb-3 text-gray-600 text-sm">Seating Capacity</li>
                    <li className="mb-3 text-gray-600 text-sm">Stage Layout</li>
                    <li className="mb-3 text-gray-600 text-sm">Aisle Configuration</li>
                    <li className="mb-3 text-gray-600 text-sm">Accessibility</li>
                    <li className="mb-3 text-gray-600 text-sm">Emergency Exits</li>
                </ul>

                <ul className="list-none w-full md:w-1/5 mb-4 text-center md:text-left">
                    <li className="font-bold text-lg mb-2">Explore</li>
                    <li className="mb-3 text-gray-600 text-sm">Digital Seating Plans</li>
                    <li className="mb-3 text-gray-600 text-sm">Personalized Seating</li>
                    <li className="mb-3 text-gray-600 text-sm">Theatrical Seating</li>
                    <li className="mb-3 text-gray-600 text-sm">Sustainable Practices</li>
                    <li className="mb-3 text-gray-600 text-sm">Post-Event Analysis</li>
                </ul>

                <ul className="list-none w-full md:w-1/5 mb-4 text-center md:text-left">
                    <li className="font-bold text-lg mb-2">Community</li>
                    <li className="mb-3 text-gray-600 text-sm">Culturals</li>
                    <li className="mb-3 text-gray-600 text-sm">Sports</li>
                    <li className="mb-3 text-gray-600 text-sm">Welfare</li>
                    <li className="mb-3 text-gray-600 text-sm">Alumini</li>
                    <li className="mb-3 text-gray-600 text-sm">Career Development</li>
                </ul>

                <ul className="list-none w-full md:w-1/5 mb-4 text-center md:text-left">
                    <li className="font-bold text-lg mb-2">Download</li>
                    <li className="mb-3 text-gray-600 text-sm">iOS</li>
                    <li className="mb-3 text-gray-600 text-sm">Android</li>
                    <li className="mb-3 text-gray-600 text-sm">Windows</li>
                    <li className="mb-3 text-gray-600 text-sm">Mac</li>
                </ul>

                <ul className="list-none w-full md:w-1/5 mb-4 text-center md:text-left">
                    <li className="font-bold text-lg mb-2">Company</li>
                    <li className="mb-3 text-gray-600 text-sm">Home</li>
                    <li className="mb-3 text-gray-600 text-sm">About</li>
                    <li className="mb-3 text-gray-600 text-sm">Contact Us</li>
                    <li className="mb-3 text-gray-600 text-sm">Sign In</li>
                    <li className="mb-3 text-gray-600 text-sm">Sign Up</li>
                </ul>
            </div>

            <div className="flex flex-col items-center justify-between pt-5 border-t border-gray-300">
                <div className="flex items-center mb-4">
                    <img src={globeIcon} alt="Globe icon" className="w-5 h-5 mr-1" />
                    <span className="text-sm">English (US)</span>
                </div>

                <div className="text-gray-600 text-sm mb-4 md:mb-0">© 2024 All Rights Reserved</div>

                <div className="flex space-x-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <i className="fab fa-pinterest text-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
