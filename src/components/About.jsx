import React from 'react'

const About = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-9xl font-minecraft mb-8">
                    Make <span className='text-[#b99733]'>Good</span> Enough
                </h1>
                <p className="text-2xl font-funnel text-gray-700 leading-relaxed max-w-7xl mx-auto">
                    Make Good Enough is a place for you to grab a PlayStation, dive into epic games, and play without limits—no commitments, just pure gaming joy!
                </p>
            </div>
            <div className="container mx-auto px-4 mt-16">
                <div className="flex justify-center gap-8">
                    {/* First Box */}
                    <div className="w-4 h-4 bg-gradient-to-br from-[#967515] to-[#c8a84b] hover:scale-125 transition-all duration-300"></div>

                    {/* Second Box */}
                    <div className="w-4 h-4 bg-[#1a0f0f] hover:scale-125 transition-all duration-300"></div>

                    {/* Third Box */}
                    <div className="w-4 h-4 bg-gradient-to-br from-[#967515] to-[#c8a84b] hover:scale-125 transition-all duration-300"></div>
                </div>
            </div>
        </div>
    )
}

export default About
