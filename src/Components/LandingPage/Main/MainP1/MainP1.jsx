import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    centerPadding: '60px',
    afterChange: (index) => {
      setMiddleIndex(index);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {/* {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.photo} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>ID: {item.id}</p>
          </div> */}
        {/* ))} */}
      </Slider>

      <div className=" absolute"></div>
      <div className="text-9xl bg-black text-white">Hi</div>
      <p>The middle index is: {middleIndex}</p>
    </div>
  );
}

export default App;
