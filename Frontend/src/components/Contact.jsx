import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
                <p className="mb-4 text-gray-800 dark:text-gray-300">
                    If you have any questions, please contact us at <a href="mailto:contact@eventx.com" className="text-blue-500">contact@eventx.com</a>.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                </form>
                <button onClick={() => navigate(-1)} className="mt-4 text-gray-500 dark:text-gray-300 hover:underline">
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default Contact;
