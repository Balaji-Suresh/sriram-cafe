import React from "react";
import mainLogo from "../assets/Main Logo.jpeg";

const Home = () => {
  return (
    <div className="text-center position-relative">
      <img 
        src={mainLogo} 
        alt="Sriram's Cafe" 
        className="background-logo" 
      />
      <div className="home-content">
        <p>100% Pure Vegetarian Delights – Taste That Feels Like Home</p>
        <p>We offer the best taste with neat and hygienic cooking practices.</p>
      </div>
    </div>
  );
};

export default Home;