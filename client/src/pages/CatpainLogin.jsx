import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CatpainLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-[375px] bg-white min-h-screen sm:min-h-[650px] sm:rounded-xl sm:shadow-xl p-6">
        <div className="p-2">
          <img
            className="h-10"
            src="https://pathforward.org/wp-content/uploads/2019/01/Uber_Logo_Black-e1547485455995.jpg"
            alt="logo"
          />
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-2xl font-bold mb-2">Captain Login</h2>
          <p className="text-gray-500 text-sm mb-8">
           access your Captain dashboard
          </p>

          <label className="text-sm font-medium mb-2">What's your email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            placeholder="email@example.com"
            className="mb-6 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="text-sm font-medium mb-2">Enter Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            placeholder="Enter your password"
            className="mb-8 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Want to ride instead?{" "}
          <Link
            to="/captain-signup"
            className="text-black font-semibold hover:underline"
          >
            Register as Captain
          </Link>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div>
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="w-full border border-black text-black py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Login as User
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatpainLogin;
