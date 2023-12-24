import React from "react";
import "./index.css";
import Title from "./Title";
import SignInForm from "./SignInForm";
import Image from "../../../images/front.jpeg";

const SignIn = () => {
  console.log("IN Sign In!");
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        width:'100vw',
        height:'100vh'
      }}
    >
      <Title />
      <SignInForm />
    </div>
  );
};

export default SignIn;
