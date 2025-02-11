import React, { useEffect, useState } from 'react';
import logo from "../assets/shed_transparent.png";

const ParallaxHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hidden md:block relative h-[calc(100vh)] overflow-hidden mt-20 md:mt-0">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-xl"
        style={{
          backgroundImage: `url(${logo})`,
          transform: `translateY(${scrollPosition * 0.5}px) scale(1.2)`, // Increased scale to prevent blur edges
          filter: 'blur(4px) brightness(0.8)',
        }}
      />

      {/* Sharp logo overlay in center */}
      {/*
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-20"
        style={{
          transform: `translateY(${scrollPosition * 0.3}px)`
        }}
      >
        <img 
          src={logo} 
          alt="Logo"
          className="w-96 h-96 object-contain"
        />
      </div>
      */}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Layer */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollPosition * 0.1}px)`
        }}
      >
        <div className="text-center p-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Blake's Gelato
          </h1>
          <p className="text-white !text-3xl m-16">Blake’s Gelato is a locally made, authentic treat crafted by Blake himself—every batch is handmade with care, ensuring the highest quality and flavor. Based in Maitland, Australia, Blake’s Gelato brings a rich, traditional taste to the community, made with passion and dedication. You can find it at The Woodville Store, Vacy General Store, and Bella and Co. Coffee Cart. Whether you're after a classic favorite or something new, Blake’s Gelato is the perfect way to indulge in a truly artisanal experience.</p>
          {/*
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold 
                           hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            View Menu
          </button>
          */}
        </div>
      </div>

      {/* Mobile bottom spacing for the bottom navbar */}
      <div className="md:hidden h-16" />
    </div>
  );
};

export default ParallaxHero;
