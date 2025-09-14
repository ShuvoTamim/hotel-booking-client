import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("guest"); // default role
  const [formData, setFormData] = useState({ email: "", password: "", hotelName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as:", role, formData);
    setIsOpen(false);
    setRole("guest");
    setFormData({ email: "", password: "", hotelName: "" });
  };

  return (
    <>
      {/* Login Button */}
      <button
        onClick={() => setIsOpen(true)}>
          Login  
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">

            {/* Role Switch */}
            <div className="flex bg-gray-200 rounded-full p-1 mb-6">
              <button
                onClick={() => setRole("guest")}
                className={`flex-1 py-2 rounded-full font-medium transition ${
                  role === "guest" ? "bg-white text-blue-600 shadow" : "text-gray-500 hover:text-blue-600"
                }`}
              >
                Guest
              </button>
              <button
                onClick={() => setRole("owner")}
                className={`flex-1 py-2 rounded-full font-medium transition ${
                  role === "owner" ? "bg-white text-green-600 shadow" : "text-gray-500 hover:text-green-600"
                }`}
              >
                Hotel Owner
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="text-center space-y-4">
              <h2 className="text-xl font-bold mb-2">
                {role === "guest" ? "Guest Login" : "Hotel Owner Login"}
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              />
              {role === "owner" && (
                <input
                  type="text"
                  name="hotelName"
                  placeholder="Hotel Name"
                  value={formData.hotelName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-green-500"
                />
              )}
              <button
                type="submit"
                className={`w-full py-3 rounded-full text-white font-semibold transition ${
                  role === "guest" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Login
              </button>
            </form>

            <p
              onClick={() => setIsOpen(false)}
              className="mt-4 text-sm text-gray-500 text-center cursor-pointer hover:text-indigo-600"
            >
              Cancel
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
