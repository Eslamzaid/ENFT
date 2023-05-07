import { useState } from "react";
import auth from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [email, setEmail] = useState("");
  let [er, setEr] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navHome = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate("/marketplace");
      })
      .catch((error) => {
        console.log(error);
        setEr(() => (er = true));
        switch (error.code) {
          case "auth/user-not-found":
            alert("Password or Email is incorrect");
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
          case "auth/invalid-email":
            alert("Email is incorrect or does not exist");
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

  return (
    <div className=" font-inter w-screen flex justify-center items-center h-screen text-white bg-gradient-to-tl from-[#141845] via-[#0D1135] to-[#2A1271]">
      <div className=" shadow-2xl bg-slate-800 rounded-xl">
        <h1 className=" w-8/12 relative top-10 text-3xl  font-semibold font-inter mx-auto">
          Log in
        </h1>
        <form
          onSubmit={signIn}
          className=" flex gap-y-4 flex-col items-center text-left justify-center w-96 h-96"
        >
          <div className="w-full relative mt-1 flex justify-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="peer shadow-md focus:outline-2 focus:outline-blue-900 focus:outline-offset-4 focus:ring-none placeholder-transparent border-none bg-slate-700 focus:ring-0 ring-red-400 mb-5 w-8/12 rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="  transition-all absolute left-[4.75rem] -top-7 text-sm w-fit py-2 peer-placeholder-shown:text-base peer-placeholder-shown:-top-0 peer-placeholder-shown:text-[#6B7280] peer-focus:-top-7 peer-focus:text-sm peer-focus:text-white"
            >
              Email
            </label>
            <br />
          </div>
          <div className="w-full mt-2 relative flex justify-center">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="peer shadow-md focus:outline-2 focus:outline-blue-900 focus:outline-offset-2 focus:ring-none placeholder-transparent border-none bg-slate-700 focus:ring-0 ring-red-400 mb-5 w-8/12 rounded-lg "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className=" transition-all absolute -top-7 left-[4.7rem] text-sm w-full py-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-placeholder-shown:text-[#6B7280] peer-focus:-top-7 peer-focus:text-sm peer-focus:text-white "
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className=" bg-sky-900 px-5 py-2 rounded-sm focus: border-none text-lg"
          >
            Sign Up{" "}
          </button>
        </form>
        <div className="flex justify-center text-sm mb-8">
          <p>Don't have an account? </p>
          <button
            onClick={() => navigate("/signup")}
            className=" underline ml-2"
          >
            Sign up
          </button>
        </div>
        <button
          className=" text-center w-full text-xs underline"
          onClick={() => navHome("/")}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Sign;