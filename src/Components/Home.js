function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
      
      <div className="text-center px-6">
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
  );
}

export default Home;
