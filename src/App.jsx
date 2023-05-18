import React from "react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
