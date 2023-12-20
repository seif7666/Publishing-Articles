import React from "react";
import SignIn from "./components/signin/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LINKS } from "./constants";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LINKS.HOME} element={<SignIn />} />
        <Route path={LINKS.SIGNUP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
