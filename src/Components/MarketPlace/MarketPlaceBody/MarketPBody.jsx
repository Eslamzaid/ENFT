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
    <article className=" flex flex-col items-center overflow-x-hidden text-center">
      <section className=" mt-28 w-[92%] ml-auto flex  items-center mb-5">
        <div
          style={{ backgroundImage: `url('${backFirst}')` }}
          className=" object-contain h-60 bg-no-repeat"
        >
          <h1>
            Discover, Collect, Sell
            <br /> and Create your NFT
          </h1>
          <p>
            Digital marketplace for crypto collectibles and non fungable tokens
          </p>
          <div>
            <button>Explore</button>
            <button>Create</button>
          </div>
        </div>
        <div>
          <div>
            <img src={redNft} alt="fluid nft" />
          </div>
          <div>
            <div>
              <img src={verfiedUser} alt="user logo" />
              <h2>{displayName}</h2>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default MarketPBody;
