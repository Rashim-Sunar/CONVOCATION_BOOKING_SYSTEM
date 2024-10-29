import React from 'react';
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

const movies = [
    {
        image: sportsImg,
        title: 'Sports Inaugaration',
        date: '19-11-2024',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'sportInaugration.html',
    },
    {
        image: alumniImg,
        title: 'Alumni Meetup',
        date: '25-11-2024',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'aliminiMeetup.html',
    },
    {
        image: jobHuntingImg,
        title: 'Job Hunting Webinar',
        date: '15-12-2024',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'jobHunting.html',
    },
    {
        image: mbafestImg,
        title: 'Cultural Night',
        date: '05-01-2025',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'culturalNight.html',
    },
    {
        image: mahotsavImg,
        title: 'Mahotsav',
        date: '01-02-2025',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'mahotsav.html',
    },
    {
        image: csefestImg,
        title: 'V-Code',
        date: '15-03-2025',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'sportInaugration.html',
    },
    {
        image: welfareImg,
        title: 'Welfare Activity',
        date: '15-12-2024',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'sportInaugration.html',
    },
    {
        image: freshersImg,
        title: "Fresher's Day",
        date: '15-12-2024',
        description: 'Brief description of the movie. This is a sample text for the movie description.',
        link: 'sportInaugration.html',
    },
];

const MovieSection = () => {
    return (
        <div className="movie-container px-6 py-4">
            {/* <h1 className="text-center text-2xl font-bold mb-6">Where Enjoyment is There...</h1> */}
            <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-20">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        image={movie.image}
                        title={movie.title}
                        date={movie.date}
                        description={movie.description}
                        link={movie.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieSection;
