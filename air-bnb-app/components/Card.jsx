import React from "react"; 
import star from "../public/assets/Star.png"


export default function Cards(props){
  let badgeText
  if(props.card.openSpots === 0)
    badgeText= "SOLD OUT"
  else if (props.card.location === "Online")
    badgeText= "ONLINE"

  return (
    <div className="card--container">
      {badgeText && <div className="sold-out-badge">{badgeText}</div>}
      <img className="card--image" src= {`../assets/${props.card.coverImg}`} alt="card-photo1 " />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star-img
        " />
        <span>{props.card.stats.rating}</span>
        <span className="grey">({props.card.stats.reviewCount})</span>
        <span className="grey">.{props.card.location}</span>
      </div>
      <p className="card--text">{props.card.title}</p>
      <p className="card--text"><span className="bold">From ${props.card.price} / </span>person</p>
    </div>


  )
}