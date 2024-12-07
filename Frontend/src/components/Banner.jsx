import React from "react";

function Banner() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/eventpic.png" 
                    alt="Event Background" 
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Discover Amazing Events
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of people at the most exciting events in your area. 
                    From concerts to workshops, find your next unforgettable experience.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[48px] w-full sm:w-auto">
                        Explore Events
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[48px] w-full sm:w-auto">
                        Create Event
                    </button>
                </div>
                
                {/* Stats */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">500+</div>
                        <div className="text-sm sm:text-base text-gray-300">Events This Month</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">10K+</div>
                        <div className="text-sm sm:text-base text-gray-300">Happy Attendees</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">50+</div>
                        <div className="text-sm sm:text-base text-gray-300">Cities Covered</div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;