import { useState } from "react";
import artData from "./artData";
import collData from "./collData";
import spaceData from "./spaceData";
import landData from "./landData";
import sportData from "./sportData";
import moreData from "./moreData";

const MainP2 = () => {
  const [item, setItem] = useState(artData);

  const filterMenu = (category) => {
    //! The Filter
    setItem(category);
  };
  return (
    <section className="bg-red400 mt-60 w-10/12 text-white">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block font-headerFont font-semibold  text-transparent bg-clip-text text-6xl">
          Top Collections
        </h2>
      </div>
      <div className=" py-5 my-7 child:mx-2 child:border child:py-4 child:rounded-full font-poppi grid grid-flow-col justify-stretch">
        <button onClick={() => filterMenu(artData)}>Art</button>
        <button onClick={() => filterMenu(collData)}>Collectibles</button>
        <button onClick={() => filterMenu(spaceData)}>Space</button>
        <button onClick={() => filterMenu(landData)}>Virtual Worlds</button>
        <button onClick={() => filterMenu(sportData)}>Sports</button>
        <button onClick={() => filterMenu(moreData)}>More</button>
      </div>
      <div className=" grid grid-cols-4 gap-x-7 gap-y-5 grid-rows-2 w-full h-fit">
        {item.map((item) => {
          return (
            <div key={item.id}>
              <div className=" relative">
                {/* <div className=" -inset-2 z-30 absolute bg-gradient-to-br from-[#8b8b8b] transition-all rounded-xl"></div> */}
                <div className=" bg-gradient-to-tl from-[#2F2960] to-[#2F2960] relative  z-50">
                  {/* <img src={item.nft} alt={item.NFTalt} /> */}
                  <h4>{item.OwnerName}</h4>
                  <h5>{item.OwnerSorName}</h5>
                  <div>
                    <div>
                      <h5>{item.FromBid}</h5>
                      <p>Floor Price</p>
                    </div>
                    <div>
                      <h5>{item.TotalBids}</h5>
                      <p>{item.Profits}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainP2;
