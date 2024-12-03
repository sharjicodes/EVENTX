import React from 'react'
import Home from './home/Home'
import Event from "./components/Event";
import {Route,Routes} from "react-router-dom" 
import Events from './event/Events';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import EventDetails from './components/EventDetails';
const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events /> }/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Signup" element={<Signup/> }/>
          <Route path="/event-details/:eventId" element={<EventDetails/>} />
        </Routes>
    </div>
  )
}
// const Home = () => (
//   <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Welcome to EventX</h1>
//       {/* Include your Cards component or other homepage content here */}
//   </div>
// );

// const Events = () => (
//   <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Our Events</h1>
//       {/* Include your Cards component or other events listing here */}
//   </div>
// );
// const eventItems = [
//   eventDetailsData['1'],
//   eventDetailsData['2'],
//   eventDetailsData['3'],
//   eventDetailsData['4'],
//   eventDetailsData['5'],
//   eventDetailsData['6'],
//   eventDetailsData['7'],
//   eventDetailsData['8'],
//   eventDetailsData['9'],
// ];
export default App