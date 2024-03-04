import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
