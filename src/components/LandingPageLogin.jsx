import React, { useState } from "react";

export default function LandingPageLogin() {
  const [role, setRole] = useState("guest"); // default mode
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    hotelName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as:", role, formData);
    // TODO: connect with backend API
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="font-playfair text-4xl font-medium mb-6">Select The Option That Suits Your Requirements</h1>

      {/* Mode Switch */}
      <div className="flex bg-gray-200 rounded-full p-1 mb-8 w-full max-w-md">
        <button
          onClick={() => setRole("guest")}
          className={`flex-1 py-2 rounded-full font-medium transition ${
            role === "guest"
              ? "bg-white text-blue-600 shadow"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          Guest
        </button>
        <button
          onClick={() => setRole("owner")}
          className={`flex-1 py-2 rounded-full font-medium transition ${
            role === "owner"
              ? "bg-white text-green-600 shadow"
              : "text-gray-500 hover:text-green-600"
          }`}
        >
          Hotel Owner
        </button>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-lg"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {role === "guest" ? "Guest Login" : "Hotel Owner Login"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
          />
        </div>

        {/* Hotel Name only for Owner */}
        {role === "owner" && (
          <input
            type="text"
            name="hotelName"
            placeholder="Hotel Name"
            value={formData.hotelName}
            onChange={handleChange}
            required
            className="mt-4 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        )}

        <button
          type="submit"
          className={`mt-6 mb-6 w-full h-11 rounded-full text-white font-semibold transition ${
            role === "guest" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}
