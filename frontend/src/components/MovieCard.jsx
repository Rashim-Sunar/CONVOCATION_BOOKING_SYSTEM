import React, {useContext} from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Link } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';


const MovieCard = ({ image, title, date, description, link, location}) => {
    // const navigate = useNavigate(); // Use useNavigate hook for navigation

    //  const handleClick = () => {
    //     navigate('/movie-detail'); // Change this to the path of your MovieDetail component
    // };

    const { setSelectedEvent } = useContext(EventContext);

    const handleClick = () => {
        setSelectedEvent({ image, title, date, description, link, location });
    };

    return (
        <div className="movie-card w-full max-w-xs mx-auto p-4">
            <img 
                src={image} 
                alt={title} 
                className="movie-poster w-full h-56 object-cover rounded-md" // Increased height from h-48 to h-56
            />
            <div className="movie-info bg-white p-4 rounded-md shadow-md">
                {/* <a href={link} className="movie-title text-lg font-semibold hover:text-blue-600">{title}</a> */}
                <Link 
                    to="/event-detail" 
                    onClick={handleClick}
                    className="hover:underline movie-title text-lg font-semibold hover:text-blue-600"
                >
                    {title}
                </Link>
                <p className="movie-genre text-gray-600">Date: {date}</p>
                <p className="movie-description text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default MovieCard;






