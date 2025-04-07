import React, { useState } from "react";
import { Link } from "react-router";
import backgroundImage from "../assets/images/background-login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-lg border border-[#1B1010] p-8">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <div className="w-10"></div>
            <div className="w-10"></div>
            <div className="w-10"></div>
          </div>

          {/* Login Header */}
          <h2 className="mt-6 text-center text-4xl sm:text-5xl font-extrabold text-[#b99733] font-minecraft">
            Login
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="text-base font-funnel text-gray-700"
                >
                  Username*
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-2 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 text-base"
                  placeholder="ex: user@gmail.com"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-funnel text-gray-700"
                >
                  Password*
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-2 appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 text-base"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 text-base font-funnel text-white bg-gradient-to-r from-[#967515] to-[#c8a84b] hover:from-[#866714] hover:to-[#b7973a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#967515] cursor-pointer rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Log in
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="h-5 w-5 text-amber-600 focus:ring-amber-500 border-gray-300 rounded cursor-pointer"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 text-base text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-base">
                <a
                  href="/forgot"
                  className="font-medium text-[#b99733] hover:text-[#967515] transition-colors duration-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-base">
                <span className="px-4 bg-white text-[#b99733]">or</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <img
                className="h-6 w-6 mr-3"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Sign in with Google
            </button>

            <div className="text-center text-base font-archivo mt-6">
              <span className="text-gray-600">Don't have an account yet? </span>
              <Link
                to="/register"
                className="text-[#b99733] underline hover:text-[#967515] transition-colors duration-300"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={backgroundImage}
          alt="Login background"
          className="w-full h-full object-cover object-right"
        />
      </div>
    </div>
  );
};

export default Login;
