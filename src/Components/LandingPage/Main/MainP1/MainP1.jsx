import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./Data2";


function App() {
  const [middleIndex, setMiddleIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2200,
    autoplaySpeed: 900,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "140px",
    afterChange: (index) => {
      setMiddleIndex(index);
    },
  };

  return (
    <div className="  ">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.nft} alt={item.NFTalt} className=" w-[28rem] h-[28rem] object-contain"/>
            <h2>{item.OwnerName}</h2>
            
          </div>
        ))}
      </Slider>

      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default App;
