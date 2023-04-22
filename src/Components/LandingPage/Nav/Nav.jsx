import React, { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.png";
import Menu from "./../../../assets/Icons/menu.png";
import Close from "./../../../assets/Icons/close.png";
import Shades from "./../../../assets/images/Images/NavShades.png";

const Nav = () => {
  let [resp, setresp] = useState(false);
  const [x, setX] = useState(window.innerWidth);

  useEffect(() => {
    function widthTracker() {
      setX((x) => (x = window.innerWidth));
    }
    window.addEventListener("resize", widthTracker);
    if (x > 725) {
      setresp(() => (resp = false));
    } else {
      setresp(() => (resp = true));
    }
    return () => window.removeEventListener("resize", widthTracker);
  }, []);

  return (
    <nav className="font-semibold text-white">
      {x < 725 ? (
        <div className="w-screen">
          <img
            alt="NavBar"
            className=" absolute w-10 top-8 right-5 cursor-pointer"
            onClick={() => setresp(() => !resp)}
            src={resp ? Close : Menu}
          />

          <ul className={resp ? "  pt-4 inline-block" : " mb-2 pt-4 "}>
            <li>
              <img src={TextLogo} className=" ml-4 cursor-pointer" alt="ENFT" />
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
              <li className="bg-backColor w-fit rounded-full hover:bg-sky-400 hover:text-slate-400 transition-colors">
                Connect Wallet
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div className=" w-screen">
          <img
            src={Shades}
            className=" w-[80em] h-[60em] z-10 fixed right-0  opacity-70 "
            alt="decorations"
          />
          <ul className="flex justify-end items-center child:z-30 sm:p-4 sm:m-3 child:border-transparent child:border-2 child:transition-all sm:bg-rd-300 sm:text-sm md:child:text-base md:p-4 lg:py-6 lg:px-16 child:cursor-pointer">
            <li className="justify-self-start mr-auto">
              <img src={TextLogo} alt="ENFT" />
            </li>
            <li className="sm:text-sm hover:border-2 hover:border-b-white sm:mx-3 md:mx-[11px] lg:mx-6 text-lg">
              Marketplace
            </li>
            <li className="sm:text-sm hover:border-2 hover:border-b-white sm:mx-3 md:mx-[11px] lg:mx-6 text-lg">
              Collection
            </li>
            <li className="sm:text-sm hover:border-2 hover:border-b-white sm:mx-3 md:mx-[11px] lg:mx-6 text-lg">
              Articles
            </li>
            <li className="sm:text-sm hover:border-2 hover:border-b-white sm:mx-3 md:mx-[11px] lg:mx-6 text-lg">
              Bid now
            </li>
            <li className=" xl:p-3 lg:p-[5px] sm:p-[5.5px] bg-backColor w-fit rounded-full hover:bg-sky-400 transition-colors ">
              Connect Wallet
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Nav;
