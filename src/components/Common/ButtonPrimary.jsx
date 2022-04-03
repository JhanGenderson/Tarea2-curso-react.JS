import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../../assets/css/style.css";

const ButtonPrimary = ({ type, to }) => (
  <Link to={to} className="button-primary">
    <Button variant="contained" color="primary" style={{fontSize:"16px", fontWeight:"bold"}}>
      {type === "details" ? "Character Comics" : "Go Back"}
    </Button>
  </Link>
);

export default ButtonPrimary;
