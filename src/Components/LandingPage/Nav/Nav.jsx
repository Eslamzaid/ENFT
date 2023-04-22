import React, { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.png";
import Menu from "./../../../assets/Icons/menu-bar.png";
import Close from "./../../../assets/Icons/cross.png";
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
    <div className=" fixed top-0 transition-all  font-semibold text-white">
      {x < 725 ? (
        <div className="  backdrop-blur-xl bg  w-screen">
          <div className=" absolute w-12 top-6 right-4 h-[3.5em] bg-gradient-to-r from-blue-400 via-sky-700 to-purple-400 opacity-20 rounded-3xl"></div>
          <img
            alt="NavBar"
            className=" absolute w-10 top-8 right-5 cursor-pointer"
            onClick={() => setresp(() => !resp)}
            src={resp ? Close : Menu}
          />

          <ul className={resp ? " pt-4 pl-4 inline-block" : " pt-4 pl-4"}>
            <li>
              <img src={TextLogo} className=" cursor-pointer" alt="ENFT" />
            </li>
            <div
              className={
                resp
                  ? "child:my-5 child:border-2 child:border-transparent child:cursor-pointer child:w-fit  child:p-4 child-hover:text-slate-200"
                  : " hidden"
              }
            >
              <li className=" hover:border-b-2 hover:border-b-white transition-all">
                Marketplace
              </li>
              <li className=" hover:border-b-2 hover:border-b-white transition-all">
                Collection
              </li>
              <li className=" hover:border-b-2 hover:border-b-white transition-all">
                Articles
              </li>
              <li className=" hover:border-b-2 hover:border-b-white transition-all">
                Bid now
              </li>
              <li className="bg-backColor w-fit rounded-full hover:bg-sky-400 hover:text-slate-400 transition-colors">
                Connect Wallet
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div className=" backdrop-blur-md w-screen">
          <img
            src={Shades}
            className=" w-[80em] z-10 absolute right-0  opacity-70 "
            alt="decorations"
          />
          <ul className="flex justify-end items-center  child:z-30 sm:p-4 sm:m-3 child:border-transparent child:border-2 child:transition-all sm:bg-rd-300 sm:text-sm md:child:text-base md:p-4 md-10 lg:py-8 lg:px-20 child:cursor-pointer">
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
    </div>
  );
};
export default Nav;
