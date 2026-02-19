import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CatpainSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

          <h2 className="text-2xl font-bold mb-6">
            Create Captain Account
          </h2>

          {/* Full Name */}
          <label className="text-sm font-medium mb-2">
            What's your name
          </label>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              required
              placeholder="First Name"
              value={formData.fullname.firstname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullname: {
                    ...formData.fullname,
                    firstname: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              required
              placeholder="Last Name"
              value={formData.fullname.lastname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullname: {
                    ...formData.fullname,
                    lastname: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <label className="text-sm font-medium mb-2">
            What's your email
          </label>
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
          <label className="text-sm font-medium mb-2">
            Create Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="mb-6 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Vehicle Section */}
          <h3 className="text-lg font-semibold mb-4">
            Vehicle Information
          </h3>

          <input
            type="text"
            required
            placeholder="Vehicle Color"
            value={formData.vehicle.color}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicle: {
                  ...formData.vehicle,
                  color: e.target.value,
                },
              })
            }
            className="mb-4 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            required
            placeholder="Plate Number"
            value={formData.vehicle.plate}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicle: {
                  ...formData.vehicle,
                  plate: e.target.value,
                },
              })
            }
            className="mb-4 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex gap-3 mb-6">
            <input
              type="number"
              required
              placeholder="Capacity"
              value={formData.vehicle.capacity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  vehicle: {
                    ...formData.vehicle,
                    capacity: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <select
              required
              value={formData.vehicle.vehicleType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  vehicle: {
                    ...formData.vehicle,
                    vehicleType: e.target.value,
                  },
                })
              }
              className="w-1/2 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Type</option>
              <option value="car">car</option>
              <option value="bike">motorcycle</option>
              <option value="auto">auto</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign Up as Captain
          </button>
        </form>

        {/* Switch to User Signup */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Want to ride instead?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-black font-semibold hover:underline"
          >
            Sign up as User
          </button>
        </p>

        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            to="/captain-login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default CatpainSignup;
