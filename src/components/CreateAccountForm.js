import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm({ onCancel }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      navigate("/login");
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-md mx-auto md:mx-0"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Account</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full p-3 mb-3 border rounded-lg"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 mb-3 border rounded-lg"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 mb-3 border rounded-lg"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
