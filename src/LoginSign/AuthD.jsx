import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import  auth  from "../firebase";

const AuthD = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <h3>{`Signed in as ${authUser.email}`}</h3>
          <button onClick={userSignOut}>Sign out</button>
        </>
      ) : (
        <h3>Signed Out</h3>
      )}
    </div>
  );
};

export default AuthD;
