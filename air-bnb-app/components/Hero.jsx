import React from "react";
import groupImages from '../src/assets/images-group.png';

export default function Hero(){
  return(
  <div className="hero--container">
    <img src={groupImages} alt=" hero-images" className="Hero--image" />
  </div>
  );
}