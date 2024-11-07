import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Singlewish({ item, deleteIwish }) {
  return (
    <div className="relative flex justify-between items-center bg-white rounded-lg shadow-md pr-10">
      <div className="flex items-center p-6">
        <img
          src={item.product_image}
          alt="Product Image"
          className="w-24 h-24 rounded-md"
        />
        <div className="ml-6 flex-1">
          <h4 className="text-lg font-semibold text-gray-900">
            {item.product_title}
          </h4>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span>{" "}
            {item.description}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> ${item.price}
          </p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md">
            Add to Cart
          </button>
        </div>
        <button className="text-red-500 text-2xl ml-4">
          <i className="fas fa-times-circle"></i>
        </button>
      </div>
      <button
        onClick={() => {
          deleteIwish(item.product_id);
          window.dispatchEvent(new Event("storage"));
        }}
        className="absolute top-4 right-4"
      >
        <img
          className="w-6 h-6 rounded-md"
          src="https://cdn-icons-png.flaticon.com/128/5974/5974771.png"
          alt="Delete Icon"
        />
      </button>
    </div>
  );
}

export default function Wishlist() {
  const [wishData, setWishData] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("wishlist")) || [];
    return cart;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishData(updatedCart);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function deleteItemAt(productId) {
    const updatedCart = wishData.filter(
      (data) => data.product_id !== productId
    );
    setWishData(updatedCart); // Update the state, re-rendering the component
    localStorage.setItem("wishlist", JSON.stringify(updatedCart)); // Update local storage
  }

  return (
    <>
      <main className="container mx-auto py-12 px-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist</h3>
        <div className="space-y-6">
          {wishData.map((item, idx) => (
            <Singlewish
              key={`${item.product_id}-${idx}`}
              item={item}
              deleteIwish={deleteItemAt}
            />
          ))}
        </div>
      </main>
    </>
  );
}

Singlewish.propTypes = {
  item: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  deleteIwish: PropTypes.func.isRequired,
};
