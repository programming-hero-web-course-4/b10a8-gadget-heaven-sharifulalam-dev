import { Helmet } from "react-helmet";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Category from "../Components/Category";
import Headertitle from "../Components/Headertitle";
import banner from "/banner.jpg";
export default function Home() {
  const category = useLoaderData();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadegts | Gadegt Heaven</title>
      </Helmet>
      <Headertitle>
        <div className="bg-purple-600 text-white pb-56 rounded-bl-lg rounded-br-lg text-center w-11/12 mx-auto">
          <h2 className="text-5xl font-extrabold  leading-12">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h2>
          <p className="mt-8 w-3/4 mx-auto text-white-70">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br />
            the coolest accessories, we have it all!
          </p>
          <Link to="/dashboard">
            <button className="mt-10 bg-white text-purple-600 font-semibold px-6 py-2 rounded-full hover:bg-purple-200">
              Shop Now
            </button>
          </Link>
        </div>
      </Headertitle>
      <section className="flex justify-center items-center  w-11/12 mx-auto -mt-52 mb-10">
        <div className=" max-w-5xl h-[570px] border border-white rounded-lg">
          <img
            src={banner}
            alt="Featured Gadget"
            className="rounded-lg  shadow-md  p-4 h-full w-full"
          />
        </div>
      </section>
      <section className="w-11/12 mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="flex flex-col md:flex-row">
          <Category category={category} />
          {/* <DisplayProduct /> */}
          <Outlet />
        </div>
      </section>
    </>
  );
}
