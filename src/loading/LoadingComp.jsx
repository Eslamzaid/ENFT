import React from "react";
import Lottie from "react-lottie";
import animationData from "./loadingIm.json";

const LoadingComp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" w-screen h-screen pointer-events-none bg-[#141845] flex justify-center items-center">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoadingComp;
