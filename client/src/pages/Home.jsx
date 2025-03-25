import React, { useState, useEffect, useRef } from 'react';

import logo from "../assets/logo.png"
import shed from "../assets/shed_transparent.png";

import FlavorGrid from "../components/FlavorGrid.jsx"

const GelatolandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const merchRef = useRef(null);
  const contactRef = useRef(null);
  const flavorsRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-amber-100 shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Gelato Logo" className="mr-3 h-10 w-auto" />
            <span className="text-2xl font-bold text-amber-800">Blake's Gelato</span>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => scrollToSection(merchRef)} className="hover:text-amber-600 transition duration-300">Merch</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-amber-600 transition duration-300">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: `url(${shed})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'blur(12px) brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-lg mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-sm mb-8 p-4">
Blake’s Gelato is a locally made, authentic treat crafted by Blake himself—every batch is handmade with care, ensuring the highest quality and flavor. Based in Maitland, Australia, Blake’s Gelato brings a rich, traditional taste to the community, made with passion and dedication. You can find it at The Woodville Store, Vacy General Store, and Bella and Co. Coffee Cart. Whether you're after a classic favorite or something new, Blake’s Gelato is the perfect way to indulge in a truly artisanal experience.
            </p>
            <button onClick={() => scrollToSection(flavorsRef)} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Explore Flavors
            </button>
          </div>
        </div>
      </div>

      {/* Featured Flavors */}
      <div ref={flavorsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Signature Flavors</h2>
          <FlavorGrid />
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <p className="lg:!text-2xl">
                Blake’s Gelato is serving up five delicious flavors right now: creamy Vanilla Bean, rich Chocolate, bold Coffee, spicy‑sweet Gingernut, and refreshing Choc Mint. Each scoop is handcrafted in small batches using only premium ingredients—come taste your new favorite today!
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src="/img/basket.png" alt="Gelato Making" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Merch Section */}
      <div ref={merchRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Merch</h2>
          <div className="">
            {[
              { name: "Blake's Gelato T-Shirt", price: "Price: TBA" }
            ].map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-lg shadow-md overflow-hidden w-64 md:w-128 mx-auto">
                <div className="h-48 bg-amber-100 mx-auto">
                  <img src={`/img/shirt-logo.png`} alt={item.name} className="h-full object-contain mx-auto" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-amber-800 font-medium">{item.price}</p>
                  <button className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded transition duration-300">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}

      {/* Contact Section */}
      <div ref={contactRef} className="py-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:mx-auto text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className="mb-2">Maitland, NSW, Australia</p>
              </div>
              <div>
                                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                                <p>Instagram: @blakesgelato</p>
                                <p>Email: blakesgelato@gmail.com</p>
              </div>
              
              
            </div>
            
            {/* EMAIL FORM 
            <div>
              <form className="bg-amber-50 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-amber-800 font-medium mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-amber-800 font-medium mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-amber-800 font-medium mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            */}
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default GelatolandingPage;
