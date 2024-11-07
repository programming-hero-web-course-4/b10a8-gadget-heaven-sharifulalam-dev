import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Category({ category }) {
  return (
    <>
      <div className="w-full mb-5 md:mb-0 md:w-1/6 bg-white max-h-max p-4 py-8 rounded-lg">
        <ul className="space-y-4">
          <Link to="/">
            <button className="hover:bg-purple-600 text-black bg-gray-200 w-full py-2 rounded-[120px]">
              All Products
            </button>
          </Link>
          {category
            ? category.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.name}`}>
                    <button className="hover:bg-purple-600 text-black bg-gray-200 w-full py-2 rounded-[120px]">
                      {category.name}
                    </button>
                  </Link>
                </li>
              ))
            : "Page Not Found"}
        </ul>
      </div>
    </>
  );
}

Category.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
