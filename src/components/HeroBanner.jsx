import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
      p="20px"
    >
      <Typography color={"#ff2625"} fontWeight={600} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Checkout most effective Exercises
      </Typography>
      <Button
        sx={{ background: "#FF2625", p: "10px" }}
        href="#exercises"
        variant="contained"
        color="error"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#FF2625"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={BannerImage} alt="banner image" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
