import { useContext, useEffect, useState } from "react";
import { DarkLightContext } from "../../MarketP";
import { useNavigate } from "react-router-dom";
import verfi from "../../../../assets/images/Users/Verifi2.webp";
import check from "../../../../assets/Icons/check.png";
import lock from "../../../../assets/Icons/lock.png";
import dataPr from "./DataProf";

const Profile = () => {
  const darkLight = useContext(DarkLightContext);
  const navigate = useNavigate();
  let [buttonNum, setButtonNum] = useState([]);
  const [dis, setDisapper] = useState(0);

  const handleClick = (num) => {
    setDisapper(() => dis + 1);
    setButtonNum((prevSelectedButtons) => {
      const index = prevSelectedButtons.indexOf(num);
      if (index !== -1) {
        return prevSelectedButtons.filter((buttonId) => buttonId !== num);
      } else {
        return [...prevSelectedButtons, num];
      }
    });
  };

  return (
    <section
      className={`relative flex flex-col gap-y-6 phone:w-full phone:min-h-[110rem] xlsm:min-h-[60rem] xlsm:w-[92%] ml-0 xlsm:ml-auto h-full mt-20 overflow-x-hidden text-left ${
        darkLight.darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* <div className=" flex phone:flex-col xlsm:flex-row phone:justify-start  xlsm:justify-between xlsm:items-end phone:ml-3 xlsm:ml-10 ssm:ml-5 llg:ml-2">
        <div>
          <h1 className="phone:mr-2 xlsm:mr-0 mt-10  text-4xl font-headerFont font-semibold">
            Profile
          </h1>
        </div>
        <p className="phone:mr-4 esm:mr-16 font-poppi text-xs font-ligth child:cursor-pointer">
          <span
            className="hover:border-b transition-all"
            onClick={() => navigate("/marketplace")}
          >
            Home
          </span>{" "}
          {">"} <span className="hover:border-b transition-all">Profile</span>
        </p>
      </div>
      <div className="flex phone:flex-col sss:flex-row phone:justify-center xlsm:justify-between phone:mr-4 xlsm:mr-0 ggg:items-end phone:ml-3 xlsm:ml-10 ssm:ml-5 llg:ml-2">
        <div
          className={`font-poppi ${
            darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
          } child:ml-3 rounded-lg phone:mr-0 xlsm:mr-7 dxl:mr-10 h-full pb10 `}
        >
          <div>
            <img
              className=" mt-3 rounded-full object-contain"
              src={verfi}
              alt="user Profile"
            />
            <h2 className=" text-xl font-semibold mt-2">Welcome, user #999</h2>
            <p className="phone:text-sm xlsm:text-lg mr-3 mt-2 mb-4">
              Looks like you are not verified yet. Verify yourself to use the
              full potential of ENFT.
            </p>
          </div>
          <div>
            <div className="flex w-11/12 items-center py-3 border-b border-slate-600 mb-2">
              <img
                src={check}
                className="object-contain mr-3 w-[3.5rem] bg-[#50BB25] px-2 py-2 rounded-full"
                alt="Verify"
              />
              <p className="text-[#6F4FF2] font-medium phone:text-sm lsmd:text-md">
                Verify account
              </p>
            </div>
            <div className="flex items-center py-3">
              <img
                className="object-contain mr-3 w-[3.5rem] bg-[#50BB25] px-2 py-2 rounded-full"
                src={lock}
                alt="Two factor authentication"
              />
              <p className="text-[#6F4FF2] font-medium phone:text-sm lsmd:text-md">
                Two-factor Authentication ( 2FA )
              </p>
            </div>
          </div>
        </div>
        <div className="phone:mt-10 sss:mt-0 phone:w-full xlsm:w-11/12 phone:mr-80 xlsm:mr-7 dxl:mr-10 min-h-[16rem] h-full">
          <h3 className=" text-xl font-semibold mb-5">Following</h3>
          <div
            className={
              dis == 4
                ? "w-full child:rounded-2xl child:font-poppi h-full"
                : "child:rounded-2xl child:font-poppi grid phone:gap-3 dxl:gap-5 phone:grid-col-1 ggg:grid-cols-2 w-full"
            }
          >
            <div
              className={
                buttonNum.includes(1)
                  ? "hidden"
                  : `flex px-3 py-4 items-center justify-start ${
                      darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
                    }`
              }
            >
              <img
                className="phone:w-8 dxl:w-12"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=5B3A29,6C7059,CB2821,1D1E33,EDFF21"
                alt="User 1"
              />
              <div className="ml-2">
                <h3 className="text-md dxl:text-lg font-medium">User #121</h3>
                <p className="text-sm  text-slate-500">60 items</p>
              </div>
              <button
                onClick={() => handleClick(1)}
                className={
                  buttonNum.includes(1)
                    ? ""
                    : "text-white ml-auto phone:mr-0 dxl:mr-5 bg-[#DC3546] phone:px-2 dxl:px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
                }
              >
                {buttonNum.includes(1) ? "follow" : "unfollow"}
              </button>
            </div>
            <div
              className={
                buttonNum.includes(2)
                  ? "hidden"
                  : `flex px-3 py-4 items-center justify-start ${
                      darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
                    }`
              }
            >
              <img
                className="phone:w-8 dxl:w-12"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=755C48,6A5F31,924E7D,A52019,78858B"
                alt="user 2"
              />
              <div className="ml-2">
                <h3 className="phone:text-md dxl:text-lg font-medium">
                  User #421
                </h3>
                <p className="text-sm  text-slate-500">53 items</p>
              </div>
              <button
                onClick={() => handleClick(2)}
                className={
                  buttonNum.includes(2)
                    ? ""
                    : "text-white ml-auto phone:mr-0 dxl:mr-5 bg-[#DC3546] phone:px-2 dxl:px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
                }
              >
                {buttonNum.includes(2) ? "follow" : "unfollow"}
              </button>
            </div>
            <div
              className={
                buttonNum.includes(3)
                  ? "hidden"
                  : `flex px-3 py-4 items-center justify-start ${
                      darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
                    }`
              }
            >
              <img
                className="phone:w-8 dxl:w-12"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=DC9D00,2F4538,2F4538,1E5945,FAD201"
                alt="user 3"
              />
              <div className="ml-2">
                <h3 className="phone:text-md dxl:text-lg font-medium">
                  user #211
                </h3>
                <p className="text-sm  text-slate-500">item 341</p>
              </div>
              <button
                onClick={() => handleClick(3)}
                className={
                  buttonNum.includes(3)
                    ? ""
                    : "text-white ml-auto phone:mr-0 dxl:mr-5 bg-[#DC3546] phone:px-2 dxl:px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
                }
              >
                {buttonNum.includes(3) ? "follow" : "unfollow"}
              </button>
            </div>
            <div
              className={
                buttonNum.includes(4)
                  ? "hidden"
                  : `flex px-3 py-4 items-center justify-start ${
                      darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
                    }`
              }
            >
              <img
                className="phone:w-8 dxl:w-12"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=212121,EA899A,E1CC4F,4C9141,922B3E"
                alt="user 4"
              />
              <div className="ml-2">
                <h3 className="phone:text-md dxl:text-lg font-medium">
                  user #526
                </h3>
                <p className="text-sm  text-slate-500">51 item</p>
              </div>
              <button
                onClick={() => handleClick(4)}
                className={
                  buttonNum.includes(4)
                    ? ""
                    : "text-white ml-auto phone:mr-0 dxl:mr-5 bg-[#DC3546] phone:px-2 dxl:px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
                }
              >
                {buttonNum.includes(1) ? "follow" : "unfollow"}
              </button>
            </div>
            {dis == 4 ? (
              <h1 className="text-slate-700 text-3xl text-center w-full h-full ">
                Your following list is empty
              </h1>
            ) : (
              ""
            )}
          </div>
        </div>
      </div> */}

      <div className="mr-10">
        <h2 className="phone:mr-2 xlsm:mr-0 mt-10 text-2xl font-headerFont font-semibold">
          My bought
        </h2>
        <div className="grid gap-8 grid-cols-4 mt-10 ">
          {dataPr.map((item, index) => {
            return (
              <div
                className={`${
                  darkLight.darkMode ? "bg-[#1D1932]" : "bg-white"
                } px-6 pt-5 pb-2 rounded-lg`}
                key={index}
              >
                <img className=" rounded-2xl object-cover" src={item.nft} alt={item.nftAlt} />

                <div className="flex items-center justify-between">
                  <h5 className=" font-semibold mt-2 text-xl">{item.nftName}</h5>
                  <img className=" relative right-4 w-12 rounded-full bottom-5 border-2" src={item.owner} alt={item.ownerAlt} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Profile;
