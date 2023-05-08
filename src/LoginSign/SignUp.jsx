import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import Loading from "../loading/LoadingComp";
import GoogleLoginIn from "../assets/Icons/GoogleLoginIn.webp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Don't try to hack it, plz😂🙂🙂🙂

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timeOut, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navHome = useNavigate();

  const notify = (error) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        navigate("/marketPlace");
      })
      .catch((error) => {
        console.log("Login failed")
        if (error == "auth/email-already-in-use") {
          notify("Email already in use");
        }  else if(password.length == 0 && email.length == 0) {
          notify("Email and Password are missing")
        }
        else if (
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            email
          ) == false
        ) {
          notify("Invalid email");
        } else if (error == "auth/missing-email") {
          notify("Missing Email");
        } else if (error == "auth/invalid-password") {
          notify("Invalid password");
        } else if (error == "auth/wrong-password") {
          notify("Password or Email is incorrect");
        } else if (error == "auth/weak-password") {
          notify(
            <div>
              <h1>Your password is weak.</h1>
              <ul>
                <li className=" text-xs">
                  Minimum length of the password should be 6
                </li>
              </ul>
            </div>
          );
        } else if (error.code === "auth/missing-password") {
          notify("Password is missing");
        }
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/marketPlace");
      })
      .catch((error) => {
        console.log(error);
        notify("Sing up failed");
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <div className=" overflow-hidden">
      {timeOut == true ? (
        <Loading />
      ) : (
        <div className=" font-inter w-screen flex justify-center items-center h-screen text-white bg-gradient-to-tr from-[#141845] via-[#0D1135] to-[#2A1271]">
          <div className=" shadow-2xl bg-slate-800 w-full eexx:w-96 msm:w-fit rounded-xl">
            <h1 className=" w-8/12 relative top-10 mb-10 text-3xl font-semibold font-inter mx-auto">
              Sign Up
            </h1>
            <form
              onSubmit={signUp}
              className=" flex gap-y-4 flex-col items-center text-left justify-center w-full msm:w-96 h-96"
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
                  className="  transition-all absolute left-[20%] eexx:left-[4.75rem] -top-7 text-sm w-fit py-2
              peer-placeholder-shown:text-base peer-placeholder-shown:-top-0 peer-placeholder-shown:text-[#6B7280] peer-focus:-top-7 peer-focus:text-sm peer-focus:text-white"
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
                  className=" transition-all absolute -top-7 left-[20%] eexx:left-[4.75rem] text-sm w-full py-2
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
              <button onClick={googleSignIn}>
                <p className="flex items-center w-36 px- justify-between hover:bg-blue-600 rounded-sm transition-all bg-[#4285F4]">
                  <img src={GoogleLoginIn} alt="Google log in" />
                  <span className="w-full font-semibold text-lg mr-2">
                    Google
                  </span>
                </p>
              </button>
              <button
                type="submit"
                className="  hover:bg-sky-900 bg-sky-800 px-5 py-2 rounded-lg focus: border-none text-lg"
                onClick={notify}
              >
                Sign up
              </button>
            </form>
            <ToastContainer />
            <div className="flex justify-center mx-auto w-9/12 text-sm mb-">
              <p>Already logged in? </p>
              <button
                onClick={() => navigate2("/login")}
                className=" underline ml-2"
              >
                Login in
              </button>
            </div>
            <button
              className=" text-center w-full mb-2 text-xs underline"
              onClick={() => navHome("/")}
            >
              Back Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
