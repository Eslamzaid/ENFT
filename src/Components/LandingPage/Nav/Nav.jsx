import { useState, useEffect, useContext } from "react";
import TextLogo from "./../../../assets/Icons/LogoText.webp";
import { useNavigate } from "react-router-dom";
import Menu from "./../../../assets/Icons/menu.webp";
import Close from "./../../../assets/Icons/close.webp";
import Shades from "./../../../assets/images/Images/NavShades.webp";
import Nbody from "./NavB/Nbody";
import FNBody from "./NavB/FNBody";
import FPol from "./../../../assets/Icons/Mask group.webp";
import { theMainCon } from "../LandingP";

const Nav = () => {
  let [x, setX] = useState(window.innerWidth);
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
      setX(() => (x = window.innerWidth));
      if (x > 725) {
        setresp(() => (resp = true));
      } else {
        setresp(() => (resp = false));
      }
    }
    window.addEventListener("resize", widthTracker);
    return () => window.removeEventListener("resize", widthTracker);
  }, []);
  const navigate = useNavigate();
  const thePrepi = useContext(theMainCon);
  return (
    <header
      style={{ backgroundImage: `url('${Shades}')` }}
      className=" bg-no-repeat  flex flex-col  items-center object-cover w-screen"
      aria-label="navigation bar"
    >
      {thePrepi.open ? <LoginPage /> : ""}
      <nav
        className={
          color
            ? "bg-cover fixed top-0 bg-no-repeat max-w-[180rem] z-[1111111111] w-screen flex justify-center items-center xl:px-16 bg-[#141845] shadow-2xl"
            : "bg-cover fixed top-0 bg-no-repeat max-w-[180rem] z-[1111111111] w-screen flex justify-center items-center xl:px-16 transition-all"
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
              <ul
                className={
                  resp ? " ml:4 pt-3 inline-block " : " ml:4 mb-2 pt-3 "
                }
              >
                <li>
                  <img
                    src={TextLogo}
                    className={
                      color
                        ? "ml-7 cursor-pointer mt-5 pb-3"
                        : " ml-7 cursor-pointer mt-5 pb-3"
                    }
                    onClick={thePrepi.homePLoc}
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
                  <li
                    onClick={thePrepi.two}
                    className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all"
                  >
                    Trending
                  </li>
                  <li
                    onClick={thePrepi.four}
                    className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all"
                  >
                    Collections
                  </li>
                  <li
                    onClick={thePrepi.eight}
                    className=" hover:border-b-2   text-left w-32 hover:border-b-white transition-all"
                  >
                    Articles
                  </li>
                  <li
                    className="bg-backColor w-28 text-center rounded-full hover:bg-sky-600 hover:text-slate-400 transition-all hover:ring-2 ring-white ring-offset-2 ring-offset-blue-300"
                    aria-label="log in button"
                    onClick={() => navigate("/signUp")}
                  >
                    Sign up
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
                <li className="justify-self-start  mr-auto child:transition-all">
                  <img
                    src={TextLogo}
                    alt="ENFT"
                    className={color ? " w-36 " : "  "}
                    onClick={thePrepi.homePLoc}
                  />
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                  onClick={thePrepi.two}
                >
                  Trending
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                  onClick={thePrepi.four}
                >
                  Collections
                </li>
                <li
                  className={
                    color
                      ? `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-md lg:mx-6`
                      : `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white
                  sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] md:mx-4 md:text-lg lg:mx-6`
                  }
                  onClick={thePrepi.eight}
                >
                  Articles
                </li>
                <li
                  className={
                    color
                      ? ` xl:px-6 xl:p-2 lg:p-[0.6rem] md:p-3 md:px-5 lg:px-6 md:ml-2 sms:p-3 sms:ml-2 sms:px-6 ssm:text-sms p-14
                  bg-backColor w-fit rounded-full hover:bg-blue-600 hover:ring-2 ring-white ring-offset-2 ring-offset-blue-300
                  transition-all`
                      : `xl:px-10 xl:p-3 lg:p-[0.7rem] lg:px-7 p-3 md:p-3 md:px-8 md:ml-1 sms:p-2 sms:ml-2 sms:px-6 ssm:text-base 
                  bg-backColor w-fit rounded-full hover:bg-blue-600 hover:ring-2 ring-white ring-offset-2 ring-offset-blue-300
                  transition-all`
                  }
                  onClick={() => navigate("/signUp")}
                >
                  Sign up
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
