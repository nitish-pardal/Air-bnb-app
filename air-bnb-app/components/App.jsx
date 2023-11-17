import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from "./Navbar";
import Hero from './Hero';
import Cards from './Card';
import data from "./data.jsx"
//<Hero />


export default function App(){

  const Cardsdata =data.map((card)=>{
    return(
    <Cards
    img = {card.coverImg}
    rating = {card.stats.rating}
    reviewCount= {card.stats.reviewCount}
    country = {card.location}
    title = {card.title}
    price = {card.price}
    />)
  })
return (
  <div>
    <Navbar />
    {Cardsdata}
  </div> 
);
}
