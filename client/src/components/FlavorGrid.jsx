import React, { useState } from 'react';

const FlavorGrid = () => {
  // Define your flavors with both default and hover images
  const flavors = [
    { 
      name: "Choc Mint", 
      desc: "", 
      hoverPath: "/img/choc-mint_cream.JPG",
      defaultPath: "/img/choc-mint_top.png" // Alternative image on hover
    },
    { 
      name: "Chocolate", 
      desc: "", 
      hoverPath: "/img/chocolate_cream.png",
      defaultPath: "/img/chocolate_top.png" 
    },
    { 
      name: "Coffee Cream", 
      desc: "", 
      hoverPath: "/img/coffee_cream.png",
      defaultPath: "/img/coffee_top.png" 
    },
    { 
      name: "Vanilla Bean", 
      desc: "", 
      hoverPath: "/img/vanilla-bean_cream.png",
      defaultPath: "/img/vanilla-bean_top.png" 
    },
  ];

  // Create a component for individual flavor cards with hover state
  const FlavorCard = ({ flavor }) => {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
      <div 
        className="bg-amber-50 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="h-56 bg-amber-200 flex items-center justify-center">
          <img 
            src={isHovering ? flavor.hoverPath : flavor.defaultPath} 
            alt={flavor.name} 
            className="h-full w-full object-cover transition-opacity duration-300" 
          />
        </div>
        <div className="p-2">
          <h3 className="text-xl font-bold">{flavor.name}</h3>
        </div>
      </div>
    );
  };

  // Render the grid with our flavor cards
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {flavors.map((flavor, index) => (
        <FlavorCard key={index} flavor={flavor} />
      ))}
    </div>
  );
};

export default FlavorGrid;
