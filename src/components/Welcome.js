import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed
import CreateAccountForm from "./CreateAccountForm";

export default function Welcome() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative flex flex-wrap items-center min-h-screen bg-gray-100 px-6 md:px-16">
      {/* Logo in top-left */}
      <div className="absolute top-4 left-6">
        <img
          src={logo}
          alt="Yonkopa Logo"
          className="h-14 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Left Side */}
      <div className="flex-1 text-center md:text-left mt-20 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Yonkopa
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Apply for a loan in just a few simple steps. Whether it’s for your
          business, education, or personal needs, we’ve got you covered.
        </p>

        {/* Buttons */}
        {!showForm && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Create Account
            </button>
          </div>
        )}

        {/* Create Account Form */}
        {showForm && <CreateAccountForm onCancel={() => setShowForm(false)} />}
      </div>

      {/* Right Side - Image */}
      {!showForm && (
        <div className="flex-1 text-center mt-8 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920219.png"
            alt="Loan Illustration"
            className="w-full max-w-3xl h-auto mx-auto"
          />
        </div>
      )}
    </div>
  );
}
