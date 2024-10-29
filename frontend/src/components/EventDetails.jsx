import React, { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Function to convert date into formatted data and time
const formatDateTime = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };

    const formattedDate = dateObject.toLocaleDateString(undefined, optionsDate);
    const formattedTime = dateObject.toLocaleTimeString(undefined, optionsTime);

    return { formattedDate, formattedTime };
};


const EventDetails = () => {
    const { selectedEvent } = useContext(EventContext);
    const navigate = useNavigate(); // Get the navigate function

    if (!selectedEvent) {
        return <div>No event selected.</div>;
    }

    const { image, title, date, description, location } = selectedEvent;

     // Calculate formatted date and time
     const { formattedDate, formattedTime } = formatDateTime(date);

     const bookTickets = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <>
            <div className="container mx-auto md:mx-20 p-5 border border-gray-300 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 my-10">
                <div className="image-container flex-1 text-center p-4">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg rounded-md"
                    />
                </div>

                <div className="text-container flex-1 p-4">
                    <h1 className="title text-2xl font-bold mb-2">{title}</h1>
                    <hr className="my-2" />
                    <p className="text-gray-700">Date: {formattedDate}</p>
                    <hr className="my-2" />
                    <p className="text-gray-700">Time: {formattedTime}</p>
                    <hr className="my-2" />
                    <p className="text-gray-700">Location: {location}</p>
                    <hr className="my-2" />
                    <p className="text-gray-700"><strong>Description:</strong> {description}</p>
                    <hr className="my-2" />
                    <div className="button-container">
                        <button 
                            onClick={bookTickets} 
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                        >
                            Book Slot
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
