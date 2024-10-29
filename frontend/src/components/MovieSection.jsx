import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';

// Import images from assets
import sportsImg from '../assets/sports.jpg';
import alumniImg from '../assets/alumni.jpg';
import jobHuntingImg from '../assets/jobHunting.jpg';
import mbafestImg from '../assets/Mbafest.jpg';
import mahotsavImg from '../assets/mahotsav.jpg';
import csefestImg from '../assets/csefest.jpg';
import welfareImg from '../assets/weelfare.jpg';
import freshersImg from '../assets/freshers.jpg';


const eventImages = [sportsImg, alumniImg, jobHuntingImg, mbafestImg,mahotsavImg, csefestImg, welfareImg, freshersImg ];

const MovieSection = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/events', {
                    method: 'GET',
                    credentials: 'include', // Include cookies if needed
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }

                const data = await response.json();
                console.log(data?.data?.events);
                setEvents(data?.data?.events); // Set the fetched events in state
            } catch (err) {
                setError(err.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Set loading to false once fetching is complete
            }
        };

        fetchEvents(); // Call the fetch function
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Error state
    }

    return (
        <div className="movie-container px-6 py-4">
            {/* <h1 className="text-center text-2xl font-bold mb-6">Where Enjoyment is There...</h1> */}
            <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-20">
                {events.map((event, index) =>{
                    const count = index % 8; // Reset count to 0 after 7
                     return (
                        <MovieCard
                         key={index}
                         image={eventImages[count]}
                         title={event.name}
                         date={event.date}
                         description={event.description}
                        link={event.link}
                     />
                   );
                })}

            </div>
        </div>
    );
};

export default MovieSection;
