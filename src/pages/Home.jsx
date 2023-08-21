import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner.jsx"
import SearchExercise from "../components/SearchExercise.jsx"
import Exercises from "../components/Exercises.jsx"

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  );
};

export default Home;
