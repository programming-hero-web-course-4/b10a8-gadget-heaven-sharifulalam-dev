import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Headertitle from "../Components/Headertitle";
export default function ProductDetails() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }

  function addToWishList(item) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("storage"));
  }

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const product = products.find((item) => item.product_id === id);

  return (
    <>
      <Headertitle>
        <Toaster />
        <div className="bg-purple-600">
          <div className="text-white pb-56 text-center w-11/12 mx-auto">
            <h2 className="text-5xl font-extrabold pt-10">Product Details</h2>
            <p className="mt-8 w-3/4 mx-auto text-white-70">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br />
              the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </Headertitle>

      {product ? (
        <section className="-mt-40 max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 flex items-center space-x-8 flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-[503px]">
            <img
              src={product.product_image}
              alt="Product"
              className="rounded-lg border-2 border-gray-200 h-full object-contain"
            />
          </div>

          <div className="w-2/3">
            <h3 className="text-2xl font-bold text-gray-800">
              {product.product_title}
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Price: <span className="font-semibold">$ {product.price}</span>
            </p>
            <div className="flex items-center mt-4">
              <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold">Specification:</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {product.specification.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <h4 className="text-lg font-semibold">Rating</h4>
            <div className="mt-6 flex items-center space-x-2">
              <Rating
                style={{ maxWidth: 180 }}
                value={Math.floor(product.rating)}
                readOnly
              />
              <span className="text-gray-600">({product.rating})</span>
            </div>
            <div className="flex space-x-2 justify-start items-center mt-6">
              <button
                onClick={() => {
                  addToCart(product);
                  toast("Successfully Added to The Cart.", {
                    duration: 4000,
                    position: "top-center",
                    icon: "✅",
                  });
                }}
                className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700 flex items-center space-x-2"
              >
                <span>Add To Cart</span>
                <span>
                  <img
                    className="h-6 w-6"
                    alt="Add to cart icon"
                    src="https://cdn-icons-png.flaticon.com/128/428/428173.png"
                  />
                </span>
              </button>
              <button
                onClick={(e) => {
                  addToWishList(product);
                  const button = e.currentTarget;
                  button.disabled = true;
                  button.classList.add("bg-[#EFEFEF]");
                  toast("Added to WishList.", {
                    duration: 4000,
                    position: "top-center",
                    icon: "❣️",
                  });
                }}
                className="w-10 h-10  border border-gray-300 rounded-full p-2 flex items-center"
              >
                <img
                  className="h-6 w-6"
                  alt="Like icon"
                  src="https://cdn-icons-png.flaticon.com/128/9146/9146846.png"
                />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-8">No Product</p>
      )}
    </>
  );
}
