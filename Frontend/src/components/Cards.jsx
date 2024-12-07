// import React from "react";

// function Cards({ item }) {
//     const cardStyle = {
//         width: '300px',
//         height: '450px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//     };

//     const imageContainerStyle = {
//         height: '200px',
//         width: '100%',
//         overflow: 'hidden',
//     };

//     const imageStyle = {
//         height: '100%',
//         width: '100%',
//         objectFit: 'cover',
//     };

//     return (
//         <div className="mt-4 my-3 p-3">
//             <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200" style={cardStyle}>
//                 <figure style={imageContainerStyle}>
//                     <img src={item.image} alt={item.name} style={imageStyle} />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         {item.name}
//                         <div className="badge badge-secondary"></div>
//                     </h2>
//                     <p>{item.title}</p>
//                     <div className="card-actions justify-between">
//                         <div className="badge badge-outline"></div>
//                         <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                             Details
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cards;
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);

    const navigate = useNavigate();

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
            setShowCommentBox(false);
        }
    };

    const toggleCommentsVisibility = () => {
        setShowComments(!showComments);
    };

    const toggleCommentBoxVisibility = () => {
        setShowCommentBox(!showCommentBox);
    };

    const handleDetailsClick = () => {
        navigate(`/event-details/${item.id}`);
    };

    return (
        <div className="w-full sm:w-80 md:w-96 lg:w-80 xl:w-72 p-2 sm:p-3">
            <div className="card bg-base-100 dark:bg-gray-800 dark:text-gray-200 shadow-xl hover:scale-105 duration-200 h-full min-h-[400px] sm:min-h-[450px] flex flex-col">
                <figure className="h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover dark:border-gray-600" 
                        loading="lazy"
                    />
                </figure>
                <div className="card-body flex-1 flex flex-col justify-between p-4 sm:p-6">
                    <div className="flex-1">
                        <h2 className="card-title text-gray-900 dark:text-gray-100 text-lg sm:text-xl mb-2">
                            {item.name}
                            <div className="badge badge-secondary"></div>
                        </h2>
                        <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base mb-4">{item.title}</p>
                    </div>
                    
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline"></div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <button 
                                onClick={handleDetailsClick}
                                className="cursor-pointer px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-pink-500 hover:text-white duration-200 text-gray-900 dark:text-gray-100 text-sm sm:text-base min-w-[80px] touch-manipulation"
                            >
                                Details
                            </button>
                            <button 
                                onClick={handleLike} 
                                className="cursor-pointer px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-red-500 hover:text-white duration-200 text-gray-900 dark:text-gray-100 text-sm sm:text-base min-w-[80px] touch-manipulation"
                            >
                                <i className="fas fa-heart mr-1"></i> {likes}
                            </button>
                            <button 
                                onClick={toggleCommentBoxVisibility} 
                                className="cursor-pointer px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white duration-200 text-gray-900 dark:text-gray-100 text-sm sm:text-base min-w-[80px] touch-manipulation"
                            >
                                <i className="fas fa-comment"></i>
                            </button>
                        </div>
                    </div>
                    
                    {showCommentBox && (
                        <div className="mt-4 space-y-3">
                            <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-2">
                                <textarea
                                    value={comment}
                                    onChange={handleCommentChange}
                                    placeholder="Write a comment..."
                                    className="p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 text-gray-900 resize-none min-h-[80px] text-sm sm:text-base"
                                    rows="3"
                                />
                                <button 
                                    type="submit" 
                                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 duration-200 text-sm sm:text-base touch-manipulation"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                    
                    <div className="mt-4">
                        <button 
                            onClick={toggleCommentsVisibility} 
                            className="text-blue-600 dark:text-blue-400 underline text-sm sm:text-base touch-manipulation"
                        >
                            {showComments ? 'Hide Comments' : 'Show Previous Comments'}
                        </button>
                        {showComments && (
                            <div className="mt-2 space-y-2 max-h-32 overflow-y-auto">
                                {comments.map((comment, index) => (
                                    <div key={index} className="border-b py-2 dark:border-gray-600 text-gray-900 dark:text-gray-200 text-sm sm:text-base">
                                        {comment}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
