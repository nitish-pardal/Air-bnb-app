import React from "react";
import airBnbLogo from "../src/assets/airbnb1.png"
export default function Navbar(){
  return(
    <nav className="airbnb-logo-container">
      <img className="airbnb-logo" src= {airBnbLogo} alt= "airbnb-logo" />
    </nav>

);
}