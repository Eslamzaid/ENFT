import React from "react";
import page404 from "../src/assets/Icons/page404.webp";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-center bg-slate-300 flex justify-center items-center w-screen h-screen">
      <div>
        <h1 className=" font-poppi text-2xl font-semibold">Page not found </h1>
        <img src={page404} alt="404 page error" />
        <button
          onClick={() => navigate(-1)}
          className=" bg-blue-200 p-5 rounded-xl hover:ring-2 ring-blue-300 transition-all"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
