import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from "./Navbar";
import Hero from './Hero';
import Cards from './Card';
import data from "./data.jsx"


export default function App(){

  const Cardsdata =data.map((card)=>{
    return(
    <Cards
    key={card.id}
    card={card}
    />
    )});
    
    return (
      <div>
    <Navbar />
    <Hero />
    <section className = "card-list">
    {Cardsdata}
    </section>

  </div> 
);
}
