import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* Mobile Container */}
      <div
        className="
          w-full
          max-w-[375px]
          min-h-screen
          flex
          flex-col
          justify-between
          bg-cover
          bg-center
          sm:rounded-xl
          sm:shadow-xl
        "
        style={{ backgroundImage: "url('./landing.jpg')" }}
      >
        {/* Logo */}
        <div className="p-6">
          <img
            className="h-10"
            src="https://pathforward.org/wp-content/uploads/2019/01/Uber_Logo_Black-e1547485455995.jpg"
            alt="logo"
          />
        </div>

        {/* Bottom Section */}
        <div className="bg-white py-6 px-6">
          <h2 className="text-2xl font-bold mb-4">Get Started With Uber</h2>
          <Link to={'/login'} className="w-full text-center text-xl block  bg-black cursor-pointer text-white py-3 rounded-lg font-semibold">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
