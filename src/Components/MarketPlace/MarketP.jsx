import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    const navigate = useNavigate()
    const logOut = () => {
        return signOut(auth)
    }

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
            console.log("You're logged out successfully")
        } catch(e) {
            console.log(e.message)
        }
    }
  return (
    <div className=" w-screen h-screen">
      <h1>This is from MarketPlace {user && user.email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default MarketPlace;
