import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "/images/background-login.png";

const HeaderUI = () => (
  <div className="flex flex-col items-center mb-8">
    <img src="/images/logo.png" alt="Logo" className="w-20 mb-4" />
    <div className="flex space-x-4">
      <div className="w-10 h-10 bg-gradient-to-r from-[#b99733] to-[#c8a84b] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <span className="text-white text-lg font-bold">M</span>
      </div>
      <div className="w-10 h-10 bg-gradient-to-r from-[#967515] to-[#b99733] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <span className="text-white text-lg font-bold">G</span>
      </div>
      <div className="w-10 h-10 bg-gradient-to-r from-[#c8a84b] to-[#967515] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <span className="text-white text-lg font-bold">E</span>
      </div>
    </div>
  </div>
);

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const testAccount = { username: "testUser", password: "testPassword" };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (errorMsg) setErrorMsg("");
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (
      formData.username === testAccount.username &&
      formData.password === testAccount.password
    ) {
      setErrorMsg("");
      alert("Login successful!");
      navigate("/");
    } else {
      setErrorMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8">
        <HeaderUI />
        <div className="w-full max-w-lg border border-[#1B1010] p-8 shadow-lg">
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#b99733] font-minecraft mb-6">
            Login
          </h2>
          {errorMsg && (
            <div className="text-red-500 text-center mb-4">{errorMsg}</div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900  focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-base"
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
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900  focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-base"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 text-base font-funnel text-white bg-gradient-to-r from-[#967515] to-[#c8a84b] hover:from-[#866714] hover:to-[#b7973a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#967515]  transition-all duration-300 hover:shadow-lg"
            >
              Log in
            </button>
            <div className="flex items-center justify-between mt-4">
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
              className="w-full flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50  transition-all duration-300 hover:shadow-md"
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
          <div className="mt-6 border border-dashed border-gray-300 p-4 rounded text-center">
            <p className="text-sm font-medium text-gray-600">
              Test Account Credentials:
            </p>
            <p className="text-base text-gray-800">
              Username: <span className="font-semibold">testUser</span>
            </p>
            <p className="text-base text-gray-800">
              Password: <span className="font-semibold">testPassword</span>
            </p>
          </div>
        </div>
      </div>
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
