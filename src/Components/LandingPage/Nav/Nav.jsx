import { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.webp";
import Menu from "./../../../assets/Icons/menu.webp";
import Close from "./../../../assets/Icons/close.webp";
import Shades from "./../../../assets/images/Images/NavShades.png";
import Nbody from "./NavB/Nbody";
import FNBody from "./NavB/FNBody";
import FPol from "./../../../assets/Icons/Mask group.png";

const Nav = () => {
  const [x, setX] = useState(window.innerWidth);
  let [color, setColor] = useState(false);
  let [resp, setresp] = useState(true);

  useEffect(() => {
    function HeightCha() {
      if (window.scrollY > 60) {
        setColor(() => (color = true));
      } else {
        setColor(() => (color = false));
      }
    }
    window.addEventListener("scroll", HeightCha);
    return () => window.removeEventListener("scroll", HeightCha);
  }, []);

  useEffect(() => {
    function widthTracker() {
      setX((x) => (x = window.innerWidth));
    }
    window.addEventListener("resize", widthTracker);
    if (x > 725) {
      setresp(() => (resp = true));
    } else {
      setresp(() => (resp = false));
    }
    return () => window.removeEventListener("resize", widthTracker);
  }, []);

  return (
    <header
      style={{ backgroundImage: `url('${Shades}')` }}
      className="  flex flex-col  items-center object-cover w-screen"
    >
      <nav
        className={
          color
            ? "bg-cover fixed top-0 bg-no-repeat max-w-[180rem] z-[111111111111111111] w-screen flex justify-center items-center xl:px-16 bg-[#141845] shadow-xl transition-all"
            : " bg-cover fixed top-0 bg-no-repeat max-w-[180rem] z-[111111111111111111] w-screen flex justify-center items-center xl:px-16 transition-all"
        }
      >
        {x < 725 ? (
          <div>
            <div className="font-semibold text-white w-screen ">
              <img
                alt="NavBar "
                className=" absolute w-10 top-12 right-7 cursor-pointer"
                onClick={() => setresp(() => !resp)}
                src={resp ? Close : Menu}
              />

              <ul className={resp ? " ml:4 pt-3 inline-block " : " ml:4 mb-2 pt-3 "}>
                <li>
                  <img
                    src={TextLogo}
                    className={color ? "ml-7 cursor-pointer mt-5 pb-3" : " ml-7 cursor-pointer mt-5 pb-3"}
                    alt="ENFT"
                  />
                </li>
                <div
                  className={
                    resp
                      ? " border-b-2 absolute z-50 backdrop-blur-md child:ml-4  w-screen child:my-5 child:border-2 child:border-transparent child:cursor-pointer  child:p-4 child-hover:text-slate-200"
                      : " hidden"
                  }
                >
                  <li className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all">
                    Marketplace
                  </li>
                  <li className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all">
                    Collection
                  </li>
                  <li className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all">
                    Articles
                  </li>
                  <li className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all">
                    Bid now
                  </li>
                  <li className="bg-backColor w-28 text-center rounded-full hover:bg-sky-600 hover:text-slate-400 transition-colors hover:ring-4 hover:ring-blue-800  focus:bg-red-400">
                    Log In
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <div className=" text-white  w-11/12 xl:w-[75rem] 2xl:w-[92.7%] 2xl:pr-8">
            <div className="mt-7">
              <ul
                className="flex justify-end items-center child:z-30  sm:m-3
                child:border-transparent child:border-2 child:transition-all
                sm:text-sm child:cursor-pointer child:font-semibold 
                 "
              >
                <li className="justify-self-start  mr-auto">
                  <img src={TextLogo} alt="ENFT" />
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                >
                  Marketplace
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                >
                  Collection
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                >
                  Articles
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-`
                  }
                >
                  Bid now
                </li>
                <li
                  className={
                    color
                      ? ` xl:px-6 xl:p-2 lg:p-[0.6rem] md:p-3 md:px-5 lg:px-6 md:ml-2 sms:p-3 sms:ml-2 sms:px-6 ssm:text-sms p-14
                  bg-backColor focus:bg-blue-900 w-fit rounded-full hover:bg-blue-600 hover:ring-4  ring-red-900 ring-offset-4 ring-offset-blue-300
                  transition-all`
                      : `xl:px-10 xl:p-3 lg:p-[0.7rem] lg:px-7 p-3 md:p-3 md:px-8 md:ml-1 sms:p-2 sms:ml-2 sms:px-6 ssm:text-base 
                  bg-backColor focus:bg-blue-900 w-fit rounded-full hover:bg-blue-600 hover:ring-4 ring-red-900 ring-offset-4 ring-offset-blue-300
                  transition-all`
                  }
                >
                  Log in
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <Nbody />
      <div
        style={{ backgroundImage: `url('${FPol}')` }}
        className="  flex flex-col items-center object-cover bg-no-repeat w-screen "
      >
        <FNBody />
      </div>
    </header>
  );
};
export default Nav;
