import Nav from "./Nav/Nav";
import Nbody from "./Nav/NavB/Nbody";
import FNBody from "./Nav/NavB/FNBody";
import loadable from "@loadable/component";
import Shades from "./../../assets/images/Images/NavShades.png";
import FPol from "./../../assets/images/Images/shad.webp";
// import Shades from "./../../../assets/images/Images/NavShades.png";
const MainP1 = loadable(() => import("./Main/MainP1/MainP1"));

const LandingP = () => {
  return (
    <article className=" bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden">
      <nav
        style={{ backgroundImage: `url('${Shades}')` }}
        className="bg-cover bg-no-repeat w-screen flex flex-col justify-start items-center relative"
      >
        <Nav />
        <Nbody />
        <div
          className=" w-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${FPol}')` }}
        >
          <FNBody />
        </div>
      </nav>
      <main className=" z-50 bg-red-400 w-screen h-fit">
        <MainP1 />
      </main>
    </article>
  );
};

export default LandingP;
