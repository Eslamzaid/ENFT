import React, { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.png";
import Menu from "./../../../assets/Icons/menu-bar.png";
import Close from "./../../../assets/Icons/cross.png";
import Shades from "./../../../assets/images/Images/NavShades.png";
import img from "./../../../assets/images/Images/Articel1.png";

const Nav = () => {
  let [resp, setresp] = useState();
  const [x, setX] = useState(window.innerWidth);

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
    <div className=" fixed top-0 transition-all font-semibold text-white">
      {x < 725 ? (
        <div className=" backdrop-blur-xl  w-screen">
          <div className=" absolute w-12 top-6 right-4 h-[3.5em] bg-gradient-to-r from-blue-400 via-sky-700 to-purple-400 opacity-20 rounded-3xl"></div>
          <img
            alt="NavBar"
            className=" absolute w-10 top-8 right-5"
            onClick={() => setresp(() => !resp)}
            src={resp ? Close : Menu}
          />

          <ul
            className={
              resp
                ? "  child:cursor-pointer pt-4 pl-4 inline-block"
                : "  child:cursor-pointer pt-4 pl-4"
            }
          >
            <li>
              <img src={TextLogo} alt="ENFT" />
            </li>
            <div
              className={resp ? " child:my-5 child:p-4" : "child:my-5 hidden"}
            >
              <li>Marketplace</li>
              <li>Collection</li>
              <li>Articles</li>
              <li>Bid now</li>
              <li className=" bg-backColor w-fit rounded-full hover:bg-sky-400 transition-colors">
                Connect Wallet
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div className=" w-screen">
          <ul className=" flex justify-end items-center sm:p-4  md:child:text-base  md:p-4 md-10   lg:py-8 lg:px-20 child:cursor-pointer ">
            <li className=" justify-self-start  mr-auto">
              <img src={TextLogo} alt="ENFT" />
            </li>
            <li className=" sm:text-base sm:mx-3 md:mx-4 lg:mx-9 text-lg">
              Marketplace
            </li>
            <li className=" sm:text-base sm:mx-3 md:mx-4 lg:mx-9 text-lg">
              Collection
            </li>
            <li className=" sm:text-base sm:mx-3 md:mx-4 lg:mx-9 text-lg">
              Articles
            </li>
            <li className=" sm:text-base sm:mx-3 md:mx-4 lg:mx-9 text-lg">
              Bid now
            </li>
            <li className=" sm:p-[5.5px] bg-backColor w-fit rounded-full hover:bg-sky-400 transition-colors p-3">
              Connect Wallet
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
