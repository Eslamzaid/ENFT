import { useState } from "react";
import {
  artData,
  collData,
  spaceData,
  sportData,
  landData,
  moreData,
} from "./MainP2D.js";

const MainP2 = () => {
  const [item, setItem] = useState(artData);

  const filterMenu = (category) => {
    //! The Filters
    setItem(category);
  };
  return (
    <section className=" bg-red-400">
      <h2>Top Collections</h2>
      <div>
        <button onClick={() => filterMenu(artData)}>Art</button>
        <button onClick={() => filterMenu(collData)}>Collectibles</button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className=" grid grid-cols-4 w-full h-fit">
        {item.map((item) => {
          return (
            <div key={item.id} className=" bg-green-400 flex ">
              <img src={item.nft} alt={item.NFTalt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainP2;
