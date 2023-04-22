import React from "react";
import Nav from "./Nav/Nav";
import Nbody from './Nav/NavB/Nbody'

const LandingP = () => {
  return (
    <article className=" w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
      <Nav />
      <Nbody />
    </article>
  );
};

export default LandingP;
