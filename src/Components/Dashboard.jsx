import { useState } from "react";
import { Helmet } from "react-helmet";
import SingleCart from "./SingleCart";
import Wishlist from "./Wishlist";
export default function Dashboard() {
  const [isactive, setisactive] = useState(true);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Gadegt Heaven</title>
      </Helmet>
      <section className="bg-purple-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-lg mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => (isactive ? true : setisactive(!isactive))}
            className={`${
              isactive ? "bg-white text-purple-600" : "bg-purple-500 text-white"
            } px-6 py-2  rounded-full`}
          >
            Cart
          </button>
          <button
            onClick={() => (isactive ? setisactive(!isactive) : true)}
            className={`${
              !isactive
                ? "bg-white text-purple-600"
                : "bg-purple-500 text-white"
            } px-6 py-2  rounded-full`}
          >
            Wishlist
          </button>
        </div>
      </section>
      {isactive ? <SingleCart /> : <Wishlist />}
    </>
  );
}
