import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Callback from "./components/Callback";
import SocialLogin from "./components/SocialLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SocialLogin />} />
      <Route path="/accounts/:provider/login/callback/*" element={<Callback />} />
    </Routes>
  );
}

export default App;
