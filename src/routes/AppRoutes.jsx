import React from "react";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Journal from "../pages/Journal/Journal";
import Reflection from "../pages/Reflection/Reflection";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="/profile" Component={Profile} />
      <Route path="/journal" Component={Journal} />
      <Route path="/Reflection" Component={Reflection} />
    </Routes>
  );
}

export default AppRoutes;
