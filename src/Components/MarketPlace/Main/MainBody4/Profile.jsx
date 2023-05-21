import { useContext, useEffect, useState } from "react";
import { DarkLightContext } from "../../MarketP";
import { useNavigate } from "react-router-dom";
import verfi from "../../../../assets/images/Users/Verifi2.webp";
import check from "../../../../assets/Icons/check.png";
import lock from "../../../../assets/Icons/lock.png";

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
      <div className=" flex phone:flex-col xlsm:flex-row phone:justify-center xlsm:justify-between xlsm:items-end phone:ml-3 xlsm:ml-10 mmd:ml-2">
        <div>
          <h1 className="mt-10 text-4xl font-headerFont font-semibold">
            Profile
          </h1>
        </div>
        <p className=" mr-4 esm:mr-16 font-poppi text-xs font-ligth child:cursor-pointer">
          <span
            className="hover:border-b transition-all"
            onClick={() => navigate("/marketplace")}
          >
            Home
          </span>{" "}
          {">"} <span className="hover:border-b transition-all">Profile</span>
        </p>
      </div>
      <div className="flex items-end">
        <div className=" bg-red-400 mr-10 h-80">
          <div>
            <img className=" mt-3 ml-3 rounded-full border-[3px] object-contain" src={verfi} alt="user Profile" />
            <h2>Welcome, user #999</h2>
            <p>
              Looks like you are not verified yet. Verify yourself to use the
              full potential of ENFT.
            </p>
          </div>
          <div>
            <div>
              <img src={check} alt="Verify" />
              <p>Verify account</p>
            </div>
            <div>
              <img src={lock} alt="Two factor authentication" />
              <p>Two-factor Authentication ( 2FA )</p>
            </div>
          </div>
        </div>
        <div className=" w-11/12 mr-10 min-h-[16rem] h-full">
          <h3 className=" text-xl font-semibold mb-5">Following</h3>
          <div className="child:rounded-2xl child:font-poppi grid gap-5 grid-cols-2 w-full">
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
                width="60px"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=5B3A29,6C7059,CB2821,1D1E33,EDFF21"
                alt="User 1"
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">User #121</h3>
                <p className="text-sm  text-slate-500">60 items</p>
              </div>
              <button
                onClick={() => handleClick(1)}
                className={
                  buttonNum.includes(1)
                    ? ""
                    : "text-white ml-auto mr-5 bg-[#DC3546] px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
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
                width="60px"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=755C48,6A5F31,924E7D,A52019,78858B"
                alt="user 2"
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">User #421</h3>
                <p className="text-sm  text-slate-500">53 items</p>
              </div>
              <button
                onClick={() => handleClick(2)}
                className={
                  buttonNum.includes(2)
                    ? ""
                    : "text-white ml-auto mr-5 bg-[#DC3546] px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
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
                width="60px"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=DC9D00,2F4538,2F4538,1E5945,FAD201"
                alt="user 3"
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">user #211</h3>
                <p className="text-sm  text-slate-500">item 341</p>
              </div>
              <button
                onClick={() => handleClick(3)}
                className={
                  buttonNum.includes(3)
                    ? ""
                    : "ml-auto mr-5 bg-[#DC3546] px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
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
                width="60px"
                src="https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=212121,EA899A,E1CC4F,4C9141,922B3E"
                alt="user 4"
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">user #526</h3>
                <p className="text-sm  text-slate-500">item 51</p>
              </div>
              <button
                onClick={() => handleClick(4)}
                className={
                  buttonNum.includes(4)
                    ? ""
                    : "ml-auto mr-5 bg-[#DC3546] px-3 py-2 rounded-lg font-medium font-poppi hover:bg-[#c92c3c]"
                }
              >
                {buttonNum.includes(1) ? "follow" : "unfollow"}
              </button>
            </div>
            {dis == 4 ? (
              <h1 className="bg-green-500 text-6xl">This is a test</h1>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Profile;
