import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Callback from "./components/Callback";
import SocialLogin from "./components/SocialLogin";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SocialLogin />} />
      <Route path="/accounts/:provider/login/callback/*" element={<Callback />} />
      <Route path="/accounts/password/reset/key/:uid/:token/" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
