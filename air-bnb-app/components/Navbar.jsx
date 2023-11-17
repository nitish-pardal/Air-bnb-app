import React from "react";
import airBnbLogo from "../public/assets/airbnb1.png";

export default function Navbar(){
  return(   
    <div className="nav-container">
    <nav className= "airbnb-logo-container">
       <img className= "airbnb-logo" src= {airBnbLogo} alt= "airbnblogo"/>
    </nav>
    </div>
    )};
