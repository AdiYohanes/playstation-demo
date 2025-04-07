import React from 'react';
import { SiPlaystation } from "react-icons/si";
import playstation from '../assets/images/playstation.png';

const Console = () => {
    // PlayStation data array - easily add, remove or modify PlayStation models here
    const playstationData = [
        {
            id: 1,
            model: "PlayStation 5",
            image: playstation,
            description: "Experience gaming like never before with the PlayStation 5. Featuring lightning-fast loading, stunning 4K graphics, and revolutionary DualSense controller feedback. Dive into the next generation of gaming entertainment."
        },
        {
            id: 2,
            model: "PlayStation 5 Digital Edition",
            image: "/images/ps5-digital.jpg",
            description: "Experience gaming like never before with the PlayStation 5 Digital Edition. Featuring lightning-fast loading, stunning 4K graphics, and revolutionary DualSense controller feedback. Dive into the next generation of gaming entertainment."
        }
        // You can easily add more PlayStation models here
    ];

    // Currently showing the first PlayStation in the list for the image
    const featuredPlaystation = playstationData[0];

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-6xl font-minecraft mb-16">
                    Our <span className="text-[#b99733]">Consoles</span>
                </h1>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="rounded-lg overflow-hidden shadow-xl h-full">
                        <img
                            src={featuredPlaystation.image}
                            alt={featuredPlaystation.model}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-12">
                        {/* Loop through all PlayStation models */}
                        {playstationData.map((playstation) => (
                            <div key={playstation.id} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-4xl font-minecraft">{playstation.model}</h2>
                                    <SiPlaystation size={32} className="text-[#b99733]" />
                                </div>
                                <p className="text-xl font-funnel text-gray-700 leading-relaxed">
                                    {playstation.description}
                                </p>
                                <button className="px-8 py-3 bg-gradient-to-r from-[#967515] to-[#c8a84b] text-white text-xl font-funnel rounded-lg hover:from-[#866714] hover:to-[#b7973a] transition-all duration-300">
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Console;