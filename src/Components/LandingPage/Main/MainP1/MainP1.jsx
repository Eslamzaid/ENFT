import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./Data2";
import "./MP1.css"

function App() {
  const [middleIndex, setMiddleIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "60px",
    afterChange: (index) => {
      setMiddleIndex(index);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.nft} alt={item.NFTalt} />
            <h2>{item.OwnerName}</h2>
            <p>ID: {item.id}</p>
          </div>
        ))}
      </Slider>

      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default App;
