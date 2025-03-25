import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
      <footer className="bg-amber-800 text-amber-100 py-6">
        <div className="container mx-auto px-6">
                {/* ADJUST FOOTER PADDING TO py-12 IF YOU WANT TO USE CODE BELOW
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Blake's Gelato</h2>
              <p className="max-w-xs">Bringing the authentic taste of Italian gelato to your neighborhood since 2010.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Explore</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition duration-300">Our Menu</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Locations</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Catering</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Franchising</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition duration-300">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">Pinterest</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p className="mb-4">Subscribe for flavor updates and special offers.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 w-full rounded-l text-amber-900 focus:outline-none"
                  />
                  <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r transition duration-300">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        */}
          
            <p className="text-center">&copy; 2025 Blake's Gelato. All rights reserved.</p>

        </div>
      </footer>
  );
};

export { Footer };
