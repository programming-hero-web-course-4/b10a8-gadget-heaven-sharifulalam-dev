import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

function Blogs({ blogitem }) {
  return (
    <div className="px-4 mt-5 py-4 w-11/12 flex flex-col md:flex-row mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-[300px] w-[400px]">
        <img
          src={blogitem.picture}
          alt="Blog Post Image"
          className="w-md h-full object-fill"
        />
      </div>

      <div className="p-4 max-w-full">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {blogitem.title}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Published on: {blogitem.date}
        </p>

        <p className="text-gray-700 text-base mb-4 max-w-3xl">
          {blogitem.details}
        </p>

        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
}

export default function Blog() {
  const blogs = useLoaderData();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Gadegt Heaven</title>
      </Helmet>

      {blogs.map((blogitem, idx) => (
        <Blogs key={idx} blogitem={blogitem}></Blogs>
      ))}
    </>
  );
}

Blogs.propTypes = {
  blogitem: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};
