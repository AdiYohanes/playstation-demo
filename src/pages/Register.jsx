import React, { useState } from 'react';
import { Link } from "react-router";
import backgroundImage from '../assets/images/background-login.png'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle register logic here
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Register Form */}
            <div className="w-1/2 flex items-center justify-center px-8 lg:px-16 xl:px-24">
                <div className="w-full max-w-md space-y-8 bg-white p-8 border border-[#1B1010]">
                    {/* Logo */}
                    <div className="flex justify-between items-center">
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                    </div>

                    {/* Register Header */}
                    <h2 className="mt-6 text-center text-6xl font-extrabold text-[#b99733] font-minecraft">
                        Register
                    </h2>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                                    Username*
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                    placeholder="ex: user@gmail.com"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email address*
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                    placeholder="ex: user@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password*
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                    placeholder="ex: user@gmail.com"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                    Confirm Password*
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                    placeholder="ex: user@gmail.com"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="agree-terms"
                                name="agreeToTerms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                            />
                            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                                By ticking, you are confirming that you have read, understood, and agree to our{' '}
                                <a href="#" className="text-[#b99733] hover:text-[#967515]">
                                    Terms & Conditions
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-[#967515] to-[#c8a84b] hover:from-[#866714] hover:to-[#b7973a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#967515] cursor-pointer"
                        >
                            Register
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-[#b99733]">or</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <img
                                className="h-5 w-5 mr-2"
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google logo"
                            />
                            Sign in with Google
                        </button>

                        <div className="text-center text-sm font-archivo">
                            <span className="text-gray-600">Already have an account? </span>
                            <Link to="/login" className="text-[#b99733] underline tracking-wide hover:text-[#967515]">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block w-1/2">
                <img 
                    src={backgroundImage}
                    alt="Register background"
                    className="w-full h-full object-cover object-right"
                />
            </div>
        </div>
    );
};

export default Register; 