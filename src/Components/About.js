function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
      
      <div className="bg-white max-w-3xl p-10 rounded-2xl shadow-lg">
        
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our Event Management System is designed to simplify how users browse,
          manage, and register for events. Whether it's concerts, conferences,
          workshops, or exhibitions — our platform brings everything together
          in one easy-to-use interface.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We aim to deliver a seamless experience by offering intuitive
          navigation, responsive design, and dynamic event details.
          Our mission is to make event discovery enjoyable and convenient.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          This platform was developed as part of a Web Advanced project,
          showcasing modern frontend technologies like ReactJS, Tailwind CSS,
          and React Router for dynamic navigation.
        </p>
      </div>

    </div>
  );
}

export default About;
