import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [theme, setTheme] = useState(() => {
        // Initialize theme from localStorage or default to 'light'
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        
        // Apply theme to body and document
        document.body.className = theme;
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = (
        <>
            <li>
                <Link to="/" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/Events" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
                    Events
                </Link>
            </li>
            <li>
                <Link to="/Contact" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/About" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMenu}>
                    About
                </Link>
            </li>
        </>
    );

    return (
        <div className={`max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-20 fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-100 dark:bg-gray-900 duration-300 transition-all ease-in-out" : "bg-base-100/95 dark:bg-gray-900/95 backdrop-blur-sm"}`}>
            <div className="navbar min-h-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="btn btn-ghost lg:hidden p-3 min-h-12"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-[1] mt-3 w-64 p-4 shadow-lg border border-gray-200 dark:border-gray-700 ${isMenuOpen ? 'block' : 'hidden'}`}>
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                        EventX
                    </Link>
                </div>
                
                <div className="navbar-end space-x-2 sm:space-x-3">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2">
                            {navItems}
                        </ul>
                    </div>
                    
                    <div className="hidden sm:block">
                        <label className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 bg-white dark:bg-gray-800 min-w-[200px]">
                            <input 
                                type="text" 
                                className="grow outline-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm" 
                                placeholder="Search events..." 
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 text-gray-900 dark:text-gray-100">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    
                    <label className="swap swap-rotate">
                        <input 
                            type="checkbox" 
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            className="theme-controller"
                        />
                        <svg
                            className="swap-off h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <svg
                            className="swap-on h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    
                    <div className="flex items-center">
                        <button
                            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-slate-800 hover:dark:bg-slate-200 duration-300 cursor-pointer text-sm sm:text-base font-medium touch-manipulation min-h-12"
                            onClick={() => {
                                document.getElementById("my_modal_3").showModal();
                                closeMenu();
                            }}
                        >
                            Login
                        </button>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
