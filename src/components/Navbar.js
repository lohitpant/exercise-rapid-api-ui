import React from "react";
import Logo from "../assets/images/Logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Stack
      className="navbar-container"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "15px", xs: "10px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "50px", height: "50px", margin: "0 30px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="22px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderTop: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
