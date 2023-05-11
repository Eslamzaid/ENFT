import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const navigate2 = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate2("/");
      }
    });
  });
  const navigate = useNavigate();
  const logOut = () => {
    return signOut(auth);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You're logged out successfully");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className=" w-screen text-center h-screen bg-[#141845] flex justify-center items-center text-white">
      <div>
        <h1 className="text-xl font-semibold lg:text-3xl">
          The Marketplace is currently{" "}
          <span className=" text-red-400 font-bold"> under construction </span>
          and is expected to be completed as soon as possible.
        </h1>
        <button onClick={handleLogout} className=" mt-10 border p-4 rounded-sm">
          {" "}
          Log Out
        </button>
      </div>
    </div>
  );
};

export default MarketPlace;
