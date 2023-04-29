import Nav from "./Nav/Nav";
import Nbody from "./Nav/NavB/Nbody";
import FNBody from "./Nav/NavB/FNBody";
import loadable from "@loadable/component";

const MainP1 = loadable(() => import("./Main/MainP1/MainP1"));

const LandingP = () => {
  return (
    <article className=" bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
      {/* cName=" bg-no-repeat w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center overflow-x-hidden" */}
      <nav className=" w-screen flex flex-col justify-start items-center relative">
        <Nav />
        <Nbody />
        <FNBody />
      </nav>
      <main className=" z-50">
        <MainP1 />
      </main>
    </article>
  );
};

export default LandingP;
