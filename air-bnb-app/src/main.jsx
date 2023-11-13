import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import "./index.css";

ReactDom.createRoot(document.getElementById('root')).render(
  <div>
     <Navbar />
     <Hero />
  </div>
 
);
