import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Journal from "../pages/Reflection";
import Reflection from "../pages/Journal";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="/profile" Component={Profile} />
      <Route path="/journal" Component={Journal} />
      <Route path="/reflection" Component={Reflection} />
    </Routes>
  );
}

export default AppRoutes;
