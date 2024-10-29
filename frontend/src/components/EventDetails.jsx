import React from 'react';
import jobHuntingImage from '../assets/jobHunting.jpg'; // Adjust the path to your image

const EventDetails = () => {

    const bookTickets = () => {
        alert("Redirecting to booking page...");
        // You can replace this alert with navigation logic if needed
    };

    return (
        <>
        <div className="container mx-20 p-5 border border-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4 my-10">
            {/* Image Container */}
            <div className="image-container flex-1 text-center p-4">
                <img 
                    src={jobHuntingImage} 
                    alt="Job Hunting" 
                    className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" 
                />
            </div>

            {/* Text Content Container */}
            <div className="text-container flex-1 p-4">
                <div className="title text-2xl font-bold mb-2">Job Hunting</div>
                <hr className="my-2" />
                <div className="rating text-gray-700">Date: 15-12-2024</div>
                <hr className="my-2" />
                <p className="text-gray-700"><strong>Time:</strong> 1:00 PM - 4:00 PM</p>
                <hr className="my-2" />
                <div className="format text-gray-700">Limited to 400 people</div>
                <hr className="my-2" />
                <div className="button-container">
                    <button 
                        onClick={bookTickets} 
                        className="button bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                    >
                        Book Slot
                    </button>
                </div>
            </div>
        </div>

        {/* About Section */}
        <div className="about w-full mt-4 p-4 mx-16">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">
                A job hunting seminar can help participants create a job search plan, practice communication skills, and learn about the interview process. Here are some topics that might be covered in a job hunting seminar:
            </p>
            <ul className="list-disc ml-5">
                <li>Reviewing labor market information</li>
                <li>Creating a job search plan</li>
                <li>Practicing communication skills</li>
                <li>Networking</li>
                <li>Following up with employers</li>
                <li>Interview process</li>
            </ul>
        </div>
        </>
    );
};

export default EventDetails;
