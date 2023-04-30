import { useState, useEffect } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.webp";
import Menu from "./../../../assets/Icons/menu.webp";
import Close from "./../../../assets/Icons/close.webp";

const Nav = () => {
  let [resp, setresp] = useState(true);
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
    <div className="max-w-[180rem] w-screen flex justify-center xl:px-16">
      {x < 725 ? (
        <nav className="font-semibold text-white w-screen">
          <div className="w-screen">
            <img
              alt="NavBar"
              className=" absolute w-10 top-8 right-5 cursor-pointer"
              onClick={() => setresp(() => !resp)}
              src={resp ? Close : Menu}
            />

            <ul className={resp ? "  pt-4 inline-block" : " mb-2 pt-4 "}>
              <li>
                <img
                  src={TextLogo}
                  className=" ml-4 cursor-pointer"
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
                <li className="bg-backColor w-fit rounded-full hover:bg-sky-400 hover:text-slate-400 transition-colors">
                  Connect Wallet
                </li>
              </div>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className=" text-white  w-11/12 xl:w-[75rem] 2xl:w-11/12">
          <div className="mt-7">
            <ul
              className="flex justify-end items-center child:z-30  sm:m-3
                child:border-transparent child:border-2 child:transition-all
                sm:text-sm  child:cursor-pointer child:font-semibold 
                 "
            >
              <li className="justify-self-start mr-auto">
                <img src={TextLogo} alt="ENFT" />
              </li>
              <li
                className="sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white
              sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6"
              >
                Marketplace
              </li>
              <li
                className="sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
              sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6"
              >
                Collection
              </li>
              <li
                className="sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
            sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6"
              >
                Articles
              </li>
              <li
                className="sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
            sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6"
              >
                Bid now
              </li>
              <li className=" xl:p-3 lg:p-[5px] md:ml-1 sm:p-[5.5px] ssm:text-base bg-backColor w-fit rounded-full hover:bg-sky-400 transition-colors">
                Connect Wallet
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};
export default Nav;
