import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
      <p className="text-2xl md:text-3xl font-light mt-4 mb-8">
        Oops! The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
