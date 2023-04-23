import React from "react";
import Nav from "./Nav/Nav";
import Nbody from "./Nav/NavB/Nbody";
import Shades from "./../../assets/images/Images/NavShades.png";
import FtextSha from "./../../assets/Icons/H1TextColor.png";

const LandingP = () => {
  return (
    <article
      style={{ backgroundImage: `url(${Shades})` }}
      className=" w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden"
    >
      <section
        style={{ backgroundImage: `url(${FtextSha})` }}
        className=" pb-9 w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center"
      >
        <Nav />
        <Nbody />
      </section>
    </article>
  );
};

export default LandingP;
