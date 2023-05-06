import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  auth  from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Sign from "./Sign";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const navigate2 = useNavigate()

  const signUp = (e) => {
    // TODO: Sign in
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate('/marketPlace')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <form onSubmit={signUp}>
        <h1>Create an account</h1>
        <h2>Or just log Int </h2>
        <button onClick={navigate2("/login")} className=" underline">Sign in</button>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
};

export default SignUp;