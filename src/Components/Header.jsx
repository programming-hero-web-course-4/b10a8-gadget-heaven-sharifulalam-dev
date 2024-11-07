import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(cartData);
    };

    const loadWishlist = () => {
      const wishData = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(wishData);
    };

    loadCart();
    loadWishlist();

    window.addEventListener("storage", loadCart);
    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          location.pathname.includes("/products") ||
          location.pathname.includes("/statistics") ||
          location.pathname.includes("/dashboard") ||
          location.pathname.includes("/blog")
            ? "text-black bg-white"
            : "text-white"
        } rounded-tl-lg rounded-tr-lg text-center`}
      >
        <div
          className={`navbar w-11/12 mx-auto  ${
            location.pathname.includes("/products") ||
            location.pathname.includes("/statistics") ||
            location.pathname.includes("/dashboard") ||
            location.pathname.includes("/blog")
              ? "bg-white"
              : "bg-purple-600"
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 bg-purple-900"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              Gadget Phone
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="space-x-2">
              <Link to="/dashboard">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar relative"
                >
                  <div className=" w-10 h-10 bg-white rounded-full p-2 border border-gray-300">
                    <img
                      className="h-2 w-2"
                      alt="Navbar component"
                      src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
                    />
                    <div
                      className={`${
                        cart.length > 0 ? "block" : "hidden"
                      } border border-gray-200 flex h-2 w-6 p-3 justify-center items-center absolute rounded-full bg-white text-red-600 -top-2 -right-2`}
                    >
                      {cart.length}
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/dashboard">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar relative"
                >
                  <button className="w-10 h-10 bg-white border border-gray-300 rounded-full p-2">
                    <img
                      className="h-2 w-2"
                      alt="Navbar component"
                      src="https://cdn-icons-png.flaticon.com/128/9146/9146846.png"
                    />
                    <div
                      className={`${
                        wishlist.length > 0 ? "block" : "hidden"
                      } border border-gray-200 flex h-2 w-6 p-3 justify-center items-center absolute rounded-full bg-white text-red-600 -top-2 -right-2`}
                    >
                      {wishlist.length}
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
