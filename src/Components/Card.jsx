import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Card({ card }) {
  const { product_title, price, product_image, product_id } = card;
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
      <div className="w-[283px] h-[181px]">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-contain mb-4"
        />
      </div>
      <div className="flex flex-col grow space-y-2">
        <h4 className="font-semibold">{product_title}</h4>
        <p className="text-gray-500">Price: {price}k</p>
      </div>

      <Link to={`/products/${product_id}`}>
        <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full border border-purple-700">
          View Details
        </button>
      </Link>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    product_title: PropTypes.string.isRequired,
    product_id: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
  }).isRequired,
};
