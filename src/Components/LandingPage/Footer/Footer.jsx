import logoText from "./../../../assets/Icons/LogoText.webp";
import dis from "./../../../assets/Icons/dis.webp";
import twi from "./../../../assets/Icons/twit.webp";
import insta from "./../../../assets/Icons/insta.webp";
import youtu from "./../../../assets/Icons/yout.webp";
import linkedin from "./../../../assets/Icons/linkedin.webp";
import copyWrite from "./../../../assets/Icons/copyWrith.webp";

const Footer = () => {
  return (
    <footer className=" bg-[#0D1135] w-full text-white flex flex-col items-center justify-center py-5">
      <section className=" transition-all child:transition-all border-b border-[#676A81] w-10/12 pb-20  ">
        <h2 className=" font-headerFont text-4xl text-center font-semibold mt-20">
          Get More Updates
        </h2>
        <p className=" py-10 font-poppi text-center">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks{" "}
        </p>
        <form className=" bg-white rounded-full w-[30rem] mx-auto my-5">
          <input
            className=" ml-16  p-5 invalid:text-rose-400  placeholder-[#828282] caret-[#141845] w-72 border-transparent focus:border-transparent focus:ring-0 text-black font-poppi border-none"
            placeholder="Your email..."
            type="email"
            id="email"
            name="email"
          />
          <button
            className=" bg-backColor float-right p-4 px-10 rounded-full mt-1 mr-1 hover:bg-blue-600 hover:ring hover:ring-blue-700 transition-all"
            type="button"
          >
            I'm In
          </button>
        </form>
      </section>
      <section className=" flex  mt-28 w-10/12 justify-between">
        <div>
          <img src={logoText} className=" w-40" alt="ENFT" />
          <p className=" font-poppi font-light leading-8 my-5 text-sm">
            The leading NFT Marketplace on Ethereum
            <br />
            Home to the next generation of digital creators.
            <br />
            Discover the best NFT collections.
          </p>
          <div className=" flex child:object-contain items-center gap-x-3">
            <a href="#">
              <img src={dis} alt="social media - discord" />
            </a>
            <a herf="https://twitter.com/SrEslamzaid" target="_blank">
              <img src={twi} alt="social media - twitter" />
            </a>
            <a href="#">
              <img src={insta} alt="social media - instagram" />
            </a>
            <a herf="#">
              <img src={youtu} alt="social media - youtube" />
            </a>
            <a href="https://www.linkedin.com/in/eslamzaid/" target="_blank">
              <img src={linkedin} alt="social media - linkedin" />
            </a>
          </div>
        </div>
        <div>
          <ul className="w-fit font-poppi font-light child:cursor-pointer child:w-fit text-sm leading-9">
            <li className=" text-4xl font-semibold mb-4">Marketplace</li>
            <li>Explore</li>
            <li>Articles</li>
            <li>How it Works</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <ul className="w-44 font-poppi font-light child:cursor-pointer child:w-fit text-sm leading-9">
            <li className=" text-4xl font-semibold mb-4">Links</li>
            <li>Tokens</li>
            <li>API</li>
            <li>Big Bounty</li>
            <li>Become Parners</li>
          </ul>
        </div>
      </section>
      <section className=" flex opacity-80 mt-10">
        <img src={copyWrite} alt="Copy write" />
        <p>2023 ENFT. all Right Reserved </p>
      </section>
    </footer>
  );
};

export default Footer;
