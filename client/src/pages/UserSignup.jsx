import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const [formData, setFormData] = useState({
    fullname: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/signin`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      navigate("/home");
      setUser(response.data);
      localStorage.setItem('token' , response.data.token)
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-[375px] bg-white min-h-screen sm:min-h-[650px] sm:rounded-xl sm:shadow-xl p-6">
        {/* Logo */}
        <div className="p-2 mb-6">
          <img
            className="h-10"
            src="https://pathforward.org/wp-content/uploads/2019/01/Uber_Logo_Black-e1547485455995.jpg"
            alt="logo"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Create User Account</h2>

          {/* Full Name */}
          <label className="text-sm font-medium mb-2">What's your name</label>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              required
              placeholder="First Name"
              value={formData.fullname.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullname: {
                    ...formData.fullname,
                    firstName: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              required
              placeholder="Last Name"
              value={formData.fullname.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullname: {
                    ...formData.fullname,
                    lastName: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <label className="text-sm font-medium mb-2">What's your email</label>
          <input
            type="email"
            required
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-6 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password */}
          <label className="text-sm font-medium mb-2">Create Password</label>
          <input
            type="password"
            required
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="mb-8 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Switch to Captain Signup */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Want to drive instead?{" "}
          <button
            onClick={() => navigate("/captain-signup")}
            className="text-black font-semibold hover:underline"
          >
            Sign up as Captain
          </button>
        </p>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
