import React from 'react'

import Parallax from './Parallax.jsx'

import logo from "../assets/logo.png"

function Home() {
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
    </>
  );
}

export default Home
