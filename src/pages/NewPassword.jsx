import React, { useState } from 'react';
import { Link } from "react-router";
import backgroundImage from '../assets/images/background-login.png'

const NewPassword = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle new password logic here
    };

    return (
        <div className="flex h-screen">
            {/* Left side - New Password Form */}
            <div className="w-1/2 flex items-center justify-center px-8 lg:px-16 xl:px-24">
                <div className="w-full max-w-md space-y-8 bg-white p-8 border border-[#1B1010]">
                    {/* Logo */}
                    <div className="flex justify-between items-center">
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                    </div>

                    {/* New Password Header */}
                    <h2 className="mt-6 text-center text-6xl font-extrabold text-[#b99733] font-minecraft">
                        New
                    </h2>
                    <h2 className="text-center text-6xl font-extrabold text-[#b99733] font-minecraft">
                        Password
                    </h2>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintvelit officia consequat duis enim velit mollit.
                    </p>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                                    New Password*
                                </label>
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    required
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                    placeholder="ex: user@gmail.com"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                    Confirm New Password*
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

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-[#967515] to-[#c8a84b] hover:from-[#866714] hover:to-[#b7973a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#967515] cursor-pointer"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block w-1/2">
                <img 
                    src={backgroundImage}
                    alt="New password background"
                    className="w-full h-full object-cover object-right"
                />
            </div>
        </div>
    );
};

export default NewPassword; 