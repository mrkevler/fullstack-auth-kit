import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [authInfo, setAuthInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      setError(null);
      if (authInfo.password !== authInfo.confirmPassword) {
        throw new Error("Passwords does not match");
      }
      const res = await axios.post("http://localhost:5001/auth/register", {
        ...authInfo,
      });

      const res2 = await axios.post("http://localhost:5001/auth/login", {
        ...authInfo,
      });

      const token = res2.data.token;
      const user = res2.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/profile");
    } catch (error) {
      setError(`There is an error: ${error?.message}`);
    }
  };

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
              {/* show profile if user is logged in */}
              {localStorage.getItem("token") && (
                <Link
                  to="/profile"
                  className="text-white hover:text-lime-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Profile
                </Link>
              )}
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

      <main className="flex-1">
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-lime-500 mb-2">
                Create Account
              </h2>
              <p className="text-gray-400">Join CLA now!</p>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
              <div>
                <div className="block text-sm font-medium text-white mb-2">
                  Username
                </div>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Choose a username"
                  onChange={(e) =>
                    setAuthInfo((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <div className="block text-sm font-medium text-white mb-2">
                  Password
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Create a password"
                  onChange={(e) =>
                    setAuthInfo((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <div className="block text-sm font-medium text-white mb-2">
                  Confirm Password
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  onChange={(e) =>
                    setAuthInfo((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-2 px-4 rounded-md hover:from-sky-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
              >
                Create Account
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="text-center">
              <div className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-lime-500 hover:text-lime-400 transition duration-200"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="text-center">
          <p className="text-cyan-400">2025</p>
        </div>
      </footer>
    </div>
  );
}
