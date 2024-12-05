import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About EventX</h1>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                    EventX is your go-to platform for designing and planning various events. We provide all the tools you need to create memorable and successful events.
                </p>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Our Mission</h2>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                    To simplify event planning and provide an exceptional user experience with our innovative platform.
                </p>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Our Team</h2>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                    We are a team of passionate event planners and tech enthusiasts dedicated to making your event planning process seamless and enjoyable.
                </p>
                <button onClick={() => navigate(-1)} className="mt-4 text-gray-500 dark:text-gray-300 hover:underline">
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default About;
