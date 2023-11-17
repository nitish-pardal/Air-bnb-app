import React from "react"; 
import star from "../public/assets/Star.png"

export default function Cards(props){
  return (
    <div className="card--container">
      <img className="card--image" src= {`../public/assets/${props.img}`} alt="card-photo1 " />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star-img
        " />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey">.{props.country}</span>
      </div>
      <p className="card--text">{props.title}</p>
      <p className="card--text"><span className="bold">From ${props.price} / </span>person</p>
    </div>


  )
}