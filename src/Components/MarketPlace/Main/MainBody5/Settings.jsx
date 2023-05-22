import { useContext, useState } from "react";
import { DarkLightContext } from "../../MarketP";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import profileImg from "../../../../assets/Icons/profilePic.png";

const Settings = () => {
  const darkLight = useContext(DarkLightContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log(user.email);
  } else {
    console.log("Sing in please");
    navigate("/");
  }
  return (
    <section
      className={`relative flex flex-col gap-y-6 phone:w-full phone:min-h-[110rem] xlsm:min-h-[60rem] xlsm:w-[92%] ml-0 xlsm:ml-auto h-full mt-20 overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className=" flex phone:flex-col xlsm:flex-row phone:justify-start  xlsm:justify-between xlsm:items-end phone:ml-3 xlsm:ml-10 ssm:ml-5 llg:ml-2">
        <div>
          <h1 className="phone:mr-2 xlsm:mr-0 mt-10  text-4xl font-headerFont font-semibold">
            Settings
          </h1>
        </div>
        <p className="phone:mr-4 esm:mr-16 font-poppi text-xs font-ligth child:cursor-pointer">
          <span
            className="hover:border-b transition-all"
            onClick={() => navigate("/marketplace")}
          >
            Home
          </span>{" "}
          {">"} <span className="hover:border-b transition-all">Settings</span>
        </p>
      </div>
      <div className="grid mr-5 msm:mr-10 phone:ml-3 xlsm:ml-10 ssm:ml-5 llg:ml-2 gap-5 phone:grid-cols-1 msm:grid-cols-2 mt-10">
        <div className="">
          <h2 className="font-headerFont text-2xl font-medium mb-6">
            User Profile
          </h2>
          <div
            className={`${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
            } p-5 rounded-xl`}
          >
            <h3 className="font-poppi font-medium text-xl">Full Name</h3>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <div className="flex items-center">
              <img
                className="mr-2 my-2 bg-[#302CD7] phone:p-1 sms:p-2 rounded-full phone:w-10 sms:w-16 object-contain"
                src={profileImg}
                alt="Profile picture"
              />
              <h4 className="text-lg font-medium font-poppi">user#999</h4>
            </div>
            <button className="text-white hover:bg-[#6346db] hover:outline outline-offset-4 outline-blue-700 transition-all bg-[#6F4FF2] text-xl font-medium font-poppi rounded-xl mt-4 px-6 py-3">
              Save
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-headerFont text-2xl font-medium mb-6">
            Update Profile
          </h2>
          <div
            className={`${
              darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
            } p-5 rounded-xl `}
          >
            <h3 className="font-poppi font-medium text-lg">Email</h3>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-2 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <h3 className="font-poppi font-medium text-lg">Password</h3>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-2 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <button className="text-white hover:bg-[#6346db] hover:outline outline-offset-4 outline-blue-700 transition-all bg-[#6F4FF2] text-xl font-medium font-poppi rounded-xl mt-4 px-6 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className=" phone:ml-3 xlsm:ml-10 ssm:ml-5 llg:ml-2 mt-5 font-poppi">
        <h2 className="font-headerFont text-2xl font-medium mb-6">
          Personal information
        </h2>
        <div
          className={`mr-5 msm:mr-10 ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
          } p-5 rounded-xl gap-5 grid phone:grid-cols-1 msm:grid-cols-2`}
        >
          <div>
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <button className="text-white phone:hidden msm:block hover:bg-[#6346db] hover:outline outline-offset-4 outline-blue-700 transition-all bg-[#6F4FF2] text-xl font-medium font-poppi rounded-xl mt-4 px-6 py-3">
              Save
            </button>
          </div>
          <div>
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <h4>Info</h4>
            <input
              className={`${
                darkLight.darkMode
                  ? "bg-[#131129] border-[#1D1932]"
                  : "bg-white border-slate-800"
              } border my-3 rounded-lg w-full`}
              type="text"
              maxLength="30"
            />
            <button className="text-white msm:hidden phone:block hover:bg-[#6346db] hover:outline outline-offset-4 outline-blue-700 transition-all bg-[#6F4FF2] text-xl font-medium font-poppi rounded-xl mt-4 px-6 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
