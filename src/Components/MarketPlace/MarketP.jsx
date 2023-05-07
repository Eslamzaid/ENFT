import {useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
    <div className=" w-screen h-screen">
      <h1>This is from MarketPlace {user && user.email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default MarketPlace;
