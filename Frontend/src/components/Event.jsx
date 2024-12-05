import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
function Event() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to EVENTX, the ultimate event management app designed to simplify and enhance your event planning experience. Whether you’re organizing a corporate conference, a wedding, a birthday party, or any special occasion,  EVENTX provides you with all the tools you need to create unforgettable events effortlessly. With our intuitive interface, real-time collaboration, and comprehensive planning features, managing every detail of your event has never been easier. Join the  EVENTX community today and make your next event a seamless success!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Event