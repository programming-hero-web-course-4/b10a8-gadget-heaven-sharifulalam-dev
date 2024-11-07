import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import group from "/Group.png";

export default function SingleCart() {
  const [updateShop, setUpdateShop] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setUpdateShop(updatedCart);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function deleteItemAt(index) {
    const updatedCart = updateShop.filter((_, idx) => idx !== index);
    setUpdateShop(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  }

  function onDescendingOrder() {
    const arrangedDescending = [...updateShop].sort(
      (a, b) => b.price - a.price
    );
    setUpdateShop(arrangedDescending);
  }

  function clearCart() {
    localStorage.removeItem("cart");
  }

  return (
    <section className="w-11/12 mx-auto mt-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Cart</h3>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800">
            Total cost: ${updateShop.reduce((c, a) => c + a.price, 0)}
          </span>
          <button
            onClick={onDescendingOrder}
            className="flex items-center justify-between space-x-4 bg-gray-100 text-gray-700 px-4 py-2 border border-purple-400 rounded-lg hover:bg-gray-200"
          >
            Sort by Price
            <span>
              <img
                className="w-4 h-4 ml-2"
                src="https://cdn-icons-png.flaticon.com/128/15512/15512564.png"
                alt=""
              />
            </span>
          </button>
          <button
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {updateShop.map((item, index, fullarray) => (
          <SingleDbCart
            key={`${item.product_id}-${index}`}
            item={item}
            index={index}
            deleteItemAt={deleteItemAt}
            clearCart={clearCart}
            setUpdateShop={setUpdateShop}
            fullarray={fullarray}
          />
        ))}
      </div>
    </section>
  );
}

function SingleDbCart({
  item,
  deleteItemAt,
  index,
  clearCart,
  setUpdateShop,
  fullarray,
}) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <img
          src={item.product_image}
          alt="Product Image"
          className="w-24 h-24 rounded-lg border-2 border-gray-200"
        />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800">
            {item.product_title}
          </h4>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-700 font-semibold mt-2">
            Price: ${item.price}
          </p>
        </div>
        <button
          onClick={() => deleteItemAt(index)}
          className="text-red-500 hover:text-red-700 flex items-center justify-center"
        >
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5974/5974771.png"
              alt=""
              className="h-4 w-4"
            />
          </span>
        </button>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center">
            <img src={group} alt="" />
            <h1 className="font-bold text-2xl">Payment Succesful</h1>

            <hr className="my-8 border-t-2 border w-full border-l-0 border-r-0 border-b-0" />
            <p className="py-4">Thanks for purchasing</p>
            <p>
              Total: <span>{fullarray.reduce((c, a) => c + a.price, 0)}$</span>
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => {
                    clearCart();
                    const updatedCart = [];
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    setUpdateShop(updatedCart);
                    window.dispatchEvent(new Event("storage"));
                    document.getElementById("my_modal_5").close();
                  }}
                  className="btn"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

SingleDbCart.propTypes = {
  item: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  deleteItemAt: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
  setUpdateShop: PropTypes.func.isRequired,
  fullarray: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
