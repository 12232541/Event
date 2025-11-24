import { useParams } from "react-router-dom";

function Dynamic() {
  const { id } = useParams();

  const events = [
    {
      id: 1,
      title: "Music Festival",
      details:
        "This festival features live bands, food trucks, dancing, and an amazing experience! Enjoy a night filled with music, lights, and energy."
    },
    {
      id: 2,
      title: "Tech Conference",
      details:
        "A full-day conference about the latest trends in AI, cybersecurity, cloud technologies, and networking opportunities with experts."
    },
    {
      id: 3,
      title: "Art Exhibition",
      details:
        "An elegant display of paintings, sculptures, and modern art pieces created by talented local and international artists."
    }
  ];

  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <h1 className="text-center mt-20 text-3xl font-bold text-red-600">
        Event Not Found
      </h1>
    );
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-5 text-center">
          {event.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          {event.details}
        </p>

        <a
          href="/features"
          className="block mt-8 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Events
        </a>
      </div>
    </div>
  );
}

export default Dynamic;
