import { useContext } from "react";
import { DarkLightContext } from "../../MarketP";
import { SavedContext } from "../../MarketP";
import noSaved from "../../../../assets/Icons/no-email-1.webp.webp";

const Saved = () => {
  const darkLight = useContext(DarkLightContext);
  const { saved, setSaved } = useContext(SavedContext);

  const removeFromSavedList = (itemId) => {
    setSaved((prevSaved) => prevSaved.filter((item) => item.id !== itemId));
  };

  return (
    <section
      className={`relative flex flex-col phone:w-full ${
        saved.length == 0
          ? "h-screen items-center justify-center"
          : "h-full min-h-[53rem] mt-32"
      } xlsm:w-[92%] ml-0 xlsm:ml-auto h-full overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      {saved.length == 0 ? (
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" mb-10 font-semibold font-poppi">
            Your save list is empty
          </h1>
          <img
            src={noSaved}
            className="w-44"
            alt="There is no any saved NFTs"
          />
        </div>
      ) : (
        <div>
          <div>
            <h1 className="phone:ml-2 xlsm:ml-10 ssm:ml-5 mb-4 text-3xl font-semibold font-headerFont">Saved NFTs</h1>
          </div>
          <div className="mb-20 phone:mr-0 xlsm:mr-10 phone:ml-2 xlsm:ml-10 ssm:ml-5 h-full phone:grid grid-cols-1 xlsm:grid-cols-2 imd:grid-cols-3 llg:grid-cols-4 gap-x-8 gap-y-8">
            {saved.map((item) => (
              <div
                key={item.id}
                className={` px-5 py-4 msm:px-8 msm:py-6 rounded-[23px]
         ${darkLight.darkMode ? "bg-[#1D1932]" : "bg-[#FFFFFF]"}`}
              >
                <img
                  src={item.nft}
                  className=" rounded-3xl"
                  alt={item.nftAlt}
                />
                <h3 className="mt-10 mb-5 text-left font-headerFont text-2xl font-medium">
                  {item.nftName}
                </h3>
                <div className=" flex justify-between relative font-poppi w-full">
                  <div className=" text-left">
                    <h4 className="text-sm xlsm:text-sm msm:text-md font-medium">
                      Auction
                    </h4>
                    <p className="mt-7 text-[#6C7AA0] text-sm msm:text-ms absolute bottom-0">
                      {item.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-sm xlsm:text-sm msm:text-md font-medium mb-2">
                      Current Bid
                    </h3>
                    <p className=" text-[#6F4FF2] text-sm">{item.currentBid}</p>
                    <p className=" text-md mt-1">{item.totalBids}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromSavedList(item.id)}
                  className={`${
                    darkLight.darkMode ? "text-white" : "text-white"
                  } hover:text-slate-300 hover:bg-[#6446e0] transition-all hover:outline outline-offset-4 outline-blue-800 bg-[#6F4FF2] w-full mt-10 py-5 text-lg font-semibold rounded-2xl`}
                >
                  Unsave
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Saved;
