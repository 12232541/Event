
const Features = () => {
  const events = [
    {
      id: 1,
      title: "Music Festival",
      desc: "Join us for an amazing night filled with music, food, and fun!",
      img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },
    {
      id: 2,
      title: "Tech Conference",
      desc: "Learn about the latest tech trends and network with professionals.",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      id: 3,
      title: "Art Exhibition",
      desc: "Explore stunning artwork from talented local artists.",
      img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
    }
  ];

  return (
    <>
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((item) => (
          <div 
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-sm mx-auto"
          >
            <img 
              src={item.img} 
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>

              <a
                href={`/event/${item.id}`}
                className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
     </>
  );
}

export default Features;
