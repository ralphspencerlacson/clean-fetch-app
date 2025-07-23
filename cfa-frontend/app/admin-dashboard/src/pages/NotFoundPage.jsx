import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 px-6 text-center">
            <h1 className="text-6xl font-extrabold text-purple-700">404</h1>
            <p className="text-2xl font-semibold mt-2 mb-4">
                You stepped into the wrong portal... 🌀
            </p>
            <p className="text-gray-600 max-w-lg mb-6">
                Instead of landing in the beautiful Camaya Coast Resort, you've been teleported to the Void of Undefined Routes.
                Our portal technicians have been notified (they're panicking).
            </p>

            <img
                src="https://media.giphy.com/media/l0MYOUI5XfRkUuAAA/giphy.gif"
                alt="Glitching portal"
                className="w-64 h-64 object-contain mb-6 rounded-lg shadow"
            />

            <Link
                to="/"
                className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-200"
            >
                🔁 Re-enter the Correct Portal (Booking)
            </Link>

            <p className="text-sm mt-4 text-gray-500 italic">
                If this happens again, try waving at the nearest hotel receptionist IRL.
            </p>
        </div>
    );
};

export default NotFoundPage;
