import React, { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.png";
import Menu from "./../../../assets/Icons/menu.png";
import Close from "./../../../assets/Icons/close.png";
import Shades from "./../../../assets/images/Images/NavShades.png";

const Nav = () => {
  const [resp, setresp] = useState(true);
  const [x, setX] = useState(window.innerWidth);

  useEffect(() => {
    function widthTracker() {
      setX((x) => x = window.innerWidth);
    }
    window.addEventListener("resize", widthTracker);
    return () => window.removeEventListener("resize", widthTracker);
  }, []);

    console.log(x)
  return (
    <div>
      <img
        className=" absolute top-10 right-4 w-8 z-[51]"
        onClick={() => setresp(() => !resp)}
        src={resp ? Menu : Close}
      />
      <div
        className={
          resp
            ? " transition-all bg-white w-screen p-4 fixed z-50 top-0 right-0"
            : " transition-all bg-white w-screen p-4 fixed z-50 top-0 right-0"
        }
      >
        <ul
          className={
            resp
              ? " not:first-child:bg-red-400"
              : "child:my-4 child:cursor-pointer"
          }
        >
          <li>
            <img src={TextLogo} alt="ENFT" />
          </li>
          <li className=" mt-5">Marketplace</li>
          <li>collection</li>
          <li>Articles</li>
          <li>Bid Now</li>
          <li>Connect Wallet</li>
          <li>{x}</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;