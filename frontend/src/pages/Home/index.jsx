import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-lime-500">Home</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-white hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-white hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Profile
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-sky-600 hover:to-cyan-600 transition duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1"></main>

      <footer className="bg-gray-800 py-4">
        <div className="text-center">
          <p className="text-cyan-400">2025</p>
        </div>
      </footer>
    </div>
  );
}
