import bgHero from "/images/bg-hero.png";
import { GiMoneyStack } from "react-icons/gi";
import { LuSmartphone } from "react-icons/lu";

const Hero = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-minecraft text-white text-center mb-6 tracking-wide">
        Medan Gaming Ecosystem
      </h1>
      <p className="text-xl sm:text-2xl md:text-4xl text-white mb-12 font-minecraft tracking-wide">
        Make Good Enough
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <button className="px-10 sm:px-12 py-4 bg-gradient-to-r from-[#967515] to-[#c8a84b] text-white text-lg sm:text-2xl font-funnel rounded-lg hover:from-[#866714] hover:to-[#b7973a] transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <GiMoneyStack size={24} />
          Pricelist
        </button>
        <button className="px-10 sm:px-12 py-4 bg-gradient-to-r from-[#967515] to-[#c8a84b] text-white text-lg sm:text-2xl font-funnel rounded-lg hover:from-[#866714] hover:to-[#b7973a] transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <LuSmartphone size={24} />
          Rent a Room
        </button>
      </div>
    </div>
  );
};

export default Hero;
