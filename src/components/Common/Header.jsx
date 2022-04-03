import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "../../assets/img/marvel.svg";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="sticky">
    <Toolbar className="navbar-header">
      <Link className="button-primary colorLink" to="/">
        <img src={logo} alt="logo" width="60" height="60" />
        &nbsp;&nbsp;
        <h1>Marvel Characters App</h1>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
