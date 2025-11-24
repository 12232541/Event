import React from "react";
import partyImg from "../Assets/Screenshot 2025-11-24 220902.png";
import weddingImg from "../Assets/Screenshot 2025-11-24 220945.png";
import promImg from "../Assets/Screenshot 2025-11-24 221010.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700">

      {/* HERO SECTION */}
      <div className="flex items-center justify-center py-20 px-6">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Event Management System
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover, manage, and register for the best events around you.
            Simplified, organized, and beautifully designed for your convenience.
          </p>

          <a
            href="/features"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Browse Events
          </a>
        </div>
      </div>

      {/* 3 IMAGE SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={partyImg} alt="Party" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Concerts & Parties</h3>
            <p className="text-gray-600 text-sm mb-2">
              Explore the most exciting nightlife & concerts happening near you.
            </p>
            <a href="https://www.ticketmaster.com/" className="text-blue-600 underline">
              Visit Site
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={weddingImg} alt="Wedding" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Weddings & Ceremonies</h3>
            <p className="text-gray-600 text-sm mb-2">
              Find venues, planners, and inspiration for your dream ceremony.
            </p>
            <a href="https://www.theknot.com/" className="text-blue-600 underline">
              Visit Site
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={promImg} alt="Prom" className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">School & Prom Events</h3>
            <p className="text-gray-600 text-sm mb-2">
              Browse formal events, school activities, and prom inspirations.
            </p>
            <a href="https://www.eventbrite.com/" className="text-blue-600 underline">
              Visit Site
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
