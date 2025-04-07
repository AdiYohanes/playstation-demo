import React, { useState } from 'react';
import { Link } from "react-router";
import backgroundImage from '../assets/images/background-login.png'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Forgot Password Form */}
            <div className="w-1/2 flex items-center justify-center px-8 lg:px-16 xl:px-24">
                <div className="w-full max-w-md space-y-8 bg-white p-8 border border-[#1B1010]">
                    {/* Logo */}
                    <div className="flex justify-between items-center">
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                        <div className="w-8"></div>
                    </div>

                    {/* Forgot Password Header */}
                    <h2 className="mt-6 text-center text-6xl font-extrabold text-[#b99733] font-minecraft">
                        Forgot
                    </h2>
                    <h2 className="text-center text-6xl font-extrabold text-[#b99733] font-minecraft">
                        Password
                    </h2>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintvelit officia consequat duis enim velit mollit.
                    </p>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                E-mail address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="ex: user@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <p className="text-sm text-gray-600">
                            We will send you an e-mail to set or reset new password.
                        </p>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-[#967515] to-[#c8a84b] hover:from-[#866714] hover:to-[#b7973a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#967515] cursor-pointer"
                        >
                            Send e-mail
                        </button>
                    </form>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block w-1/2">
                <img 
                    src={backgroundImage}
                    alt="Forgot password background"
                    className="w-full h-full object-cover object-right"
                />
            </div>
        </div>
    );
};

export default ForgotPassword; 