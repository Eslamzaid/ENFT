import logoText from "./../../../assets/Icons/LogoText.webp";
import dis from "./../../../assets/Icons/dis.webp";
import twi from "./../../../assets/Icons/twit.webp";
import insta from "./../../../assets/Icons/insta.webp";
import youtu from "./../../../assets/Icons/yout.webp";
import linkedin from "./../../../assets/Icons/linkedin.webp";
import copyWrite from "./../../../assets/Icons/copyWrith.webp";
import blueBgSHa from "./../../../assets/images/Images/blueBgSHa.webp";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: ` url('${blueBgSHa}')` }}
      className=" bg-cover  w-full"
    >
      <div className=" z-40 bg-[#0D1135] bg-no-repeat bg-cover  mt-96 bg-top w-full text-white flex flex-col items-center justify-center py-5">
        <section className=" relative z-50 transition-all child:transition-all border-b border-[#676A81] w-full msm:w-10/12 pb-20  ">
          <h2 className=" font-headerFont text-3xl exsm:text-4xl text-center font-semibold mt-20">
            Get More Updates
          </h2>
          <p className=" py-10 font-poppi text-center px-4">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks{" "}
          </p>
          <div className=" flex flex-col justify-center items-center eexx:block  bg-white eexx:rounded-full w-full eexx:w-11/12 msm:w-[30rem] mx-auto my-5">
            <input
              className=" msm:ml-16 my-4 eexx:my-0 text-ellipsis  p-5 invalid:text-rose-400 rounded-full msm:rounded-none  placeholder-[#828282] caret-[#141845] w-8/12 msm:w-72 eexx:border-transparent focus:border-transparent focus:ring-0 text-black font-poppi border-2 border-slate-300 bg-slate-200 eexx:bg-transparent   eexx:border-none"
              placeholder="Your email..."
              type="email"
              id="email"
              name="email"
            />
            <button
              className="my-3 eexx:mb-0 w-40 mx eexx:w-fit bg-backColor eexx:float-right p-4 px-10 rounded-full  mt-1 mr-1 hover:bg-blue-600 hover:ring hover:ring-blue-400 transition-all"
              type="button"
            >
              I'm In
            </button>
          </div>
        </section>
        <section className=" relative z-50 flex h-fit flex-wrap gap-y-10 px-5 mmd:px-0 gap-x-6 mt-28 w-10/12 justify-between">
          <div className=" flex-none">
            <img
              src={logoText}
              className=" relative bottom-2 w-40"
              alt="ENFT"
            />
            <p className=" font-poppi font-light leading-8 my-2 text-xs child:break-words w-48 exsm:w-fit exsm:text-sm">
              The leading NFT Marketplace on Ethereum
              <br />
              Home to the next generation of digital creators.
              <br />
              Discover the best NFT collections.
            </p>
            <div className=" flex bg-red child:flex-wrap w-fit child:object-contain justify-between items-center gap-x-3">
              <a href="#">
                <img
                  className=" hidden exsm:block hover:opacity-80 transition-opacity"
                  src={dis}
                  alt="social media - discord"
                />
              </a>
              <a href="https://twitter.com/SrEslamzaid" target="_blank">
                <img
                  className=" hover:opacity-80 transition-opacity"
                  src={twi}
                  alt="social media - twitter"
                />
              </a>
              <div>
                <a href="#">
                  <img
                    className=" hidden exsm:block hover:opacity-80 transition-opacity"
                    src={insta}
                    alt="social media - instagram"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    className=" hidden exsm:block hover:opacity-80 transition-opacity"
                    src={youtu}
                    alt="social media - youtube"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/eslamzaid/"
                  target="_blank"
                >
                  <img
                    className=" hover:opacity-80 transition-opacity"
                    src={linkedin}
                    alt="social media - linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex-none">
            <ul className="w-fit font-poppi child:transition-all font-light child:w-fit text-sm leading-9">
              <li className=" text-2xl mmd:text-4xl  font-semibold mb-4">
                Marketplace
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white">
                Explore
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white ">
                Articles
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white ">
                How it Works
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white ">
                Help
              </li>
            </ul>
          </div>
          <div className=" md:flex-grow-0 flex-grow eee:flex eee:justify-center mmd:block text-center">
            <ul className="w-44 font-poppi child:transition-all font-light child:w-fit text-sm leading-9">
              <li className=" text-2xl mmd:text-4xl  font-semibold mb-4">
                Links
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white">
                Tokens
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white">
                API
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white">
                Big Bounty
              </li>
              <li className=" cursor-pointer border-transparent border-b hover:border-white">
                Become Partners
              </li>
            </ul>
          </div>
        </section>
        <section className=" relative z-50 flex opacity-80 mt-10">
          <img
            className=" w-3 relative bottom-[0.65rem] exsm:w-fit object-contain"
            src={copyWrite}
            alt="Copy write"
          />
          <p className=" text-xs exsm:text-sm whitespace-pre-wrap">
            2023 ENFT. all Right Reserved <br />
            <span className=" text-sm underline font-semibold font-headerFont">
              Made by Eslam
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
