import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "38px", xs: "20px" }, ml: { sm: "50px" } }} p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "35px" } }}
        margin="20px 0px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="30px">
        Check out the most effective exercises <br className="hero-banner-br" />{" "}
        personalized to you
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "6px 18px",
          mt: "20px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          mt: "30px",
          display: { lg: "block", xs: "none" },
          fontSize: "190px",
          userSelect: "none",
        }}
      >
        Exercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
