import React, { useState, useEffect } from "react";
import data from "./data";

const Nbody2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === data.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentRow = (
    <tr key={data[currentIndex].id}>
      <td>{data[currentIndex].id}</td>
      <img src={data[currentIndex].nft}/>
      <td>{data[currentIndex].TotalPrince}</td>
    </tr>
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{currentRow}</tbody>
      </table>
    </div>
  );
};

export default Nbody2;
