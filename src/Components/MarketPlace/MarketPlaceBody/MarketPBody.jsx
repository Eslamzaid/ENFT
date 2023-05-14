import backFirst from "./../../../assets/Icons/BackWithImage.webp";
import redNft from "./../../../assets/images/nfts/NFT.webp";
import verfiedUser from "./../../../assets/images/Users/Verifi2.webp";
import { getAuth } from "firebase/auth";

const MarketPBody = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    var displayName = user.displayName;
  }

  return (
    <article className=" flex flex-col items-center h-full overflow-x-hidden text-center text-white">
      <section className=" relative mt-28 w-[92%] ml-auto flex justify-between items-center gap-x-10 bg-lime-400  mb-5">
        <div
          className=" [&>h1]:z-20 [&>h1]:relative [&>p]:z-20 [&>p]:relative
                         w-full h-72 relative bg-purple-900"
        >
          <img
            src={backFirst}
            className=" absolute z-10 top-2 w-[53rem] h-[18rem] object-cover rounded-3xl"
            alt="Marketplace"
          />
          <h1 className=" relative text-4xl ml-8 mt-10 font-headerFont font-semibold text-left">
            Discover, Collect, Sell
            <br /> and Create your NFT
          </h1>
          <p className=" text-left ml-8  text-[#B7A7F9] font-poppi my-5">
            Digital marketplace for crypto collectibles and non fungable tokens
          </p>
          <div className=" z-20 relative">
            <button>Explore</button>
            <button>Create</button>
          </div>
        </div>

        <div className="w-full h-48 flex bg-blue-400">
          <div>
            <img src={redNft} alt="fluid nft" />
          </div>
          <div>
            <div>
              <img src={verfiedUser} alt="user logo" />
              <h2>user#{Math.floor(Math.random() * 1000)}</h2>
            </div>
            <h3>Birghten LQ</h3>
            <div>
              <div>
                <h5>Auction time</h5>
                <h5>3h 1m 50s</h5>
              </div>
              <div>
                <h5>Current Bid: 0.05 ETH</h5>
                <h5>0.15 ETH</h5>
              </div>
            </div>
            <div>
              <button>Place a Bid</button>
              <button>Details</button>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default MarketPBody;
