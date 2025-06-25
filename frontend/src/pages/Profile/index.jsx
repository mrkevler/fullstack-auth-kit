import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const getUserInfo = () => {
    const LSValue = localStorage.getItem("user");
    const userObject = JSON.parse(LSValue);

    return userObject?.username;
  };

  // const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const logOutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
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

      <main className="flex-1">
        <div className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-cyan-500 h-32"></div>

              <div className="relative px-8 pb-8">
                <div className="flex items-end -mt-16 mb-6">
                  <div className="w-24 h-24 bg-gray-700 rounded-full border-4 border-gray-800 overflow-hidden">
                    <img
                      src="https://cataas.com/cat/cute?width=96&height=96"
                      alt="Profile avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6 pb-2">
                    <h2 className="text-2xl font-bold text-white">
                      {getUserInfo()}
                    </h2>
                    <p className="text-gray-400">@mrKevler</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-lime-500 mb-3">
                        Personal Information
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email</span>
                          <span className="text-white">
                            info@bartoszsergot.com
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Joined</span>
                          <span className="text-white">June 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location</span>
                          <span className="text-white">
                            Grevesmuehlen,
                            <span className="text-lime-200"> Germany</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-lime-500 mb-3">
                        Account Settings
                      </h3>
                      <div className="space-y-3">
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-200">
                          Edit Profile
                        </button>
                        <button
                          className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white py-2 px-4 rounded-md transition duration-200"
                          onClick={logOutUser}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-lime-500 mb-3">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white">Profile updated</span>
                      <span className="text-gray-400 text-sm">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white">Password changed</span>
                      <span className="text-gray-400 text-sm">3 days ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white">Account created</span>
                      <span className="text-gray-400 text-sm">1 week ago</span>
                    </div>
                  </div>
                </div>
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
