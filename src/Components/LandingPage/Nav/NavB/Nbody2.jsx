import React, { useState, useEffect } from "react";
import data from "./data";
import bcIm from "./../../../../assets/Icons/BckStand.png"

const Nbody2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      
      <div className=" relative bg-red-200">
        <div className=" absolute aspect-3 h-32 bg-red-300"></div>
        <div className=" absolute aspect-2 -skew-x-6 h-60 bg-slate-700"></div>
        <div className=" absolute w-[5em] h-12 bg-purple-500"></div>
        <div className=" absolute w-[5em] h-12 bg-blue-500"></div>
      </div>
      {/* <table>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={index === currentIndex ? " animate-waving-hand" : " "}
            >
              {index === currentIndex && (
                <>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.nft} alt={item.imgName} />
                  </td>
                  <td>{item.TotalPrice}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Nbody2;
