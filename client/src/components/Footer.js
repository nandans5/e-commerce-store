import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="sticky" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">E-Commerce Store</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
