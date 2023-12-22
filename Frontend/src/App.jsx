import React from "react";
import { LINKS, ROLES } from "./constants";
import SignIn from "./components/registration/signin/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/registration/signup/SignUp";
import AuthorHome from "./components/author/AuthorHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LINKS.HOME} element={<SignIn />} />
        <Route path={LINKS.SIGNUP} element={<SignUp />} />
        <Route path={`/${ROLES.list[ROLES.AUTHOR_INDEX]}`} element={<AuthorHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
