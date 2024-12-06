import React from "react";
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import Footer from "../components/Footer";
import list from "../../public/list.json";
function Events() {
  return (
    <>
        <Navbar />
        <div className=" min-h-screen">
        <Event />
        </div>
        <Footer />
    </>
  );
}

export default Events;