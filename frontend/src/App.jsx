// import React from "react";

import { Routes, Route } from "react-router";

import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      AppTEST
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
