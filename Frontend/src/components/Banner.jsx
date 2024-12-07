import React from 'react'
import eventpic from "/eventpic.png"

const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-6 sm:space-y-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Transforming Ordinary Moments into <span className="text-pink-500"> Extraordinary Memories</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            We turn your visions into unforgettable experiences. From meticulous planning to flawless execution, we ensure every detail is perfect, creating memorable events that exceed expectations. Let us transform your special moments into extraordinary memories.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow outline-none" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn btn-active btn-secondary mt-6 w-full sm:w-auto touch-manipulation min-h-[44px]">
                        Secondary
                    </button>
                </div>
                <div className="order-1 w-full md:w-1/2 mt-8 md:mt-0">
                    <img 
                        src={eventpic} 
                        className="w-full h-auto px-4 sm:px-10 md:px-20 py-8 sm:py-12 md:py-20 object-contain" 
                        alt="Event-pic"
                        loading="eager"
                    />
                </div>
            </div>
        </>
    )
}

export default Banner