import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// Don't try to hack it, plz😂🙂

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navHome = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate("/marketPlace");
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/missing-email":
            alert("Missing Email");
            break;
          case "auth/invalid-password":
            alert("Invalid password");
            break;
          case "auth/wrong-password":
            alert("Password or Email is incorrect");
            break;
          case "auth/weak-password":
            alert("Password must be a string with at least six characters.");
            break;
          case "auth/missing-password":
            alert("Missing password");
            break;
        }
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/marketPlace");
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred while signing in with Google");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/marketPlace");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className=" font-inter w-screen flex justify-center items-center h-screen text-white bg-gradient-to-tl from-[#141845] via-[#0D1135] to-[#2A1271]">
      <div className=" shadow-2xl bg-slate-800 rounded-xl">
        <h1 className=" w-8/12 relative top-10 text-3xl  font-semibold font-inter mx-auto">
          Sign Up
        </h1>
        <form
          onSubmit={signUp}
          className=" flex gap-y-4 flex-col items-center text-left justify-center w-96 h-96"
        >
          <div className="w-full relative mt-1 flex justify-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="peer shadow-md
              focus:outline-blue-900
              focus:outline-offset-4
              focus:ring-none
              placeholder-transparent
              border-none bg-slate-700
              focus:ring-0 ring-red-400
              mb-5 w-8/12 rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="  transition-all absolute left-[4.75rem] -top-7 text-sm w-fit py-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:-top-0
              peer-placeholder-shown:text-[#6B7280]
              peer-focus:-top-7
              peer-focus:text-sm
              peer-focus:text-white
              "
            >
              Email
            </label>
          </div>
          <div className="w-full mt-2 relative flex justify-center">
            <input
              type="password"
              id="password"
              name="password"
              focus:outline-2
              placeholder="Password"
              className="peer shadow-md
              focus:outline-2
              focus:outline-blue-900
              focus:outline-offset-2
              focus:ring-none
              placeholder-transparent
              border-none bg-slate-700
              focus:ring-0 ring-red-400
              mb-5 w-8/12 rounded-lg "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className=" transition-all absolute -top-7 left-[4.7rem] text-sm w-full py-2
            peer-placeholder-shown:text-base
            peer-placeholder-shown:top-0
            peer-placeholder-shown:text-[#6B7280]
            peer-focus:-top-7
            peer-focus:text-sm
            peer-focus:text-white
            "
            >
              Password
            </label>
          </div>
          <button onClick={googleSignIn}>Google</button>
          <button
            type="submit"
            className=" hover:bg-sky-900 bg-sky-800 px-5 py-2 rounded-sm focus: border-none text-lg"
          >
            Sign Up{" "}
          </button>
        </form>
        <div className="flex justify-center text-sm mb-8">
          <p>Already logged in? </p>
          <button
            onClick={() => navigate2("/login")}
            className=" underline ml-2"
          >
            Sign in
          </button>
        </div>
        <button className=" text-center w-full text-xs underline" onClick={() =>navHome('/')}>Back Home</button>
      </div>
    </div>
  );
};

export default SignUp;
