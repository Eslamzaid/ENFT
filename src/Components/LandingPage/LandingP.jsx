import React from "react";
import Nav from "./Nav/Nav";
import Nbody from "./Nav/NavB/Nbody";

import FNBody from "./Nav/NavB/FNBody";

const LandingP = () => {
  return (
    <article className=" bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
      <section>
        <nav className=" bg-no-repeat w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center overflow-x-hidden">
          <Nav />
          <Nbody />
          <FNBody />
        </nav>
      </section>
    </article>
  );
};

export default LandingP;
