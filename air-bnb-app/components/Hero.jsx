import React from "react";
import groupImages from '../src/assets/images-group.png';

export default function Hero(){
  return(
 <section>
    <div className="hero--container">
      <img src={groupImages} alt=" hero-images" className="Hero--image" />
      </div>
      <div className="hero--title">
        <h1>Online Experiences</h1>
        <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    
  </section>
  );
}