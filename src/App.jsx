import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }} m={"auto"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
