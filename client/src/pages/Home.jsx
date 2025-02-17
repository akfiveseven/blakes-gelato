import React from 'react'

import Parallax from './Parallax.jsx'

import Carousel from "../components/Carousel.jsx";

import logo from "../assets/logo.png"
import basket from "../assets/basket.png"
import shirt from "../assets/shirt.png"

import CoffeeGelato from "../assets/coffee_cream.png";
import CoffeeTop from "../assets/coffee_top.png";

import ChocMintGelato from "../assets/choc-mint_cream.png";
import ChocMintTop from "../assets/choc-mint_top.png";

import ChocolateGelato from "../assets/chocolate_cream.png";
import ChocolateTop from "../assets/chocolate_top.png";

import VanillaBeanGelato from "../assets/vanilla-bean_cream.png";
import VanillaBeanTop from "../assets/vanilla-bean_top.png";

function Home() {

  const slides = [
    {
      image: `${VanillaBeanTop}`,
      title: "Vanilla Bean -- Blake's Gelato",
    },
    {
      image: `${VanillaBeanGelato}`,
      title: "Vanilla Bean Gelato",
    },
    {
      image: `${ChocolateTop}`,
      title: "Chocolate -- Blake's Gelato",
    },
    {
      image: `${ChocolateGelato}`,
      title: "Chocolate Gelato",
    },
    {
      image: `${CoffeeTop}`,
      title: "Coffee -- Blake's Gelato",
    },
    {
      image: `${CoffeeGelato}`,
      title: "Coffee Gelato",
    },
    {
      image: `${ChocMintTop}`,
      title: "Choc Mint -- Blake's Gelato",
    },
    {
      image: `${ChocMintGelato}`,
      title: "Choc Mint Gelato",
    },
  ];

  return(
    <>
      {/*
      <div className="">
        <h1 className="absolute w-full md:hidden text-center font-mono">Blake's Gelato</h1>
        <div className="flex items-center justify-center min-h-screen md:min-h-full">
          <img src={logo} className="md:hidden" />
        </div>
      </div>
      <div className="m-8">
        <p>Blake’s Gelato is a locally made, authentic treat crafted by Blake himself—every batch is handmade with care, ensuring the highest quality and flavor. Based in Maitland, Australia, Blake’s Gelato brings a rich, traditional taste to the community, made with passion and dedication. You can find it at The Woodville Store, Vacy General Store, and Bella and Co. Coffee Cart. Whether you're after a classic favorite or something new, Blake’s Gelato is the perfect way to indulge in a truly artisanal experience.</p>
      </div>
      <br />
      <br />
      */}
      <Parallax />
      {/* 
      <div className="">
        <h1 className="absolute w-full md:hidden text-center font-mono">Blake's Gelato</h1>
        <div className="flex items-center justify-center min-h-screen md:min-h-full">
          <img src={logo} className="md:hidden" />
        </div>
      </div>
       */}
      <div className="m-8 md:grid md:grid-cols-2 md:gap-8 md:m-12">
        <p className="md:!text-3xl">Blake’s Gelato is a locally made, authentic treat crafted by Blake himself—every batch is handmade with care, ensuring the highest quality and flavor. Based in Maitland, Australia, Blake’s Gelato brings a rich, traditional taste to the community, made with passion and dedication. You can find it at The Woodville Store, Vacy General Store, and Bella and Co. Coffee Cart. Whether you're after a classic favorite or something new, Blake’s Gelato is the perfect way to indulge in a truly artisanal experience.</p>
        <img className="hidden md:block" src={basket} />
      </div>
      <img className="md:hidden" src={basket}  />
      <div className="hidden md:block" id="gelato">
        <br />
        <hr className="w-[75%] mx-auto"  />
        <br />
        <br />
      </div>
      <div className="block md:hidden">
        <br />
      </div>
      <section>
        <h1 className="text-center">Gelato</h1>
        <br />
        <Carousel slides={slides} />
        <br />
        <br />
      </section>
      <div className="hidden md:block">
        <br />
        <hr className="w-[75%] mx-auto" />
        <br />
        <br />
      </div>
      <div className="block md:hidden">
        <br />
      </div>
      <section id="merch">
        <h1 className="text-center">Merch</h1>
      </section>
      <br />
      <img className="m-auto" src={shirt} width="392px" height="422px" />
      <br />



    </>
  );
}

export default Home
