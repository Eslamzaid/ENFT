import React, { useState, useEffect } from "react";
import data from "./data";

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index === currentIndex ? " animate-waving-hand" : " "}>
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
      </table>
    </div>
  );
};

export default Nbody2;