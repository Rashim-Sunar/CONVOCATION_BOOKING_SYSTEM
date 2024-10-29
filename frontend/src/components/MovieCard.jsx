import React from 'react';

const MovieCard = ({ image, title, date, description, link }) => {
    return (
        <div className="movie-card w-full max-w-xs mx-auto p-4">
            <img 
                src={image} 
                alt={title} 
                className="movie-poster w-full h-56 object-cover rounded-md" // Increased height from h-48 to h-56
            />
            <div className="movie-info bg-white p-4 rounded-md shadow-md">
                <a href={link} className="movie-title text-lg font-semibold hover:text-blue-600">{title}</a>
                <p className="movie-genre text-gray-600">Date: {date}</p>
                <p className="movie-description text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default MovieCard;


