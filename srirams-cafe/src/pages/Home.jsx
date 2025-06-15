import React from "react";
import { Carousel } from "react-bootstrap";
import idlyImg from "../assets/dummy-images/idly.jpg";
import dosaImg from "../assets/dummy-images/dosa.jpg";
import vadaImg from "../assets/dummy-images/vada.jpg";

const Home = () => {
  // Carousel items with dummy food images
  const carouselItems = [
    {
      id: 1,
      image: idlyImg,
      alt: "Idly",
      caption: "Soft and fluffy Idly",
      description: "Served with sambar and chutney"
    },
    {
      id: 2,
      image: dosaImg,
      alt: "Dosa",
      caption: "Crispy Dosa",
      description: "South Indian delicacy"
    },
    {
      id: 3,
      image: vadaImg,
      alt: "Vada",
      caption: "Crunchy Vada",
      description: "Perfect breakfast item"
    }
  ];

  return (
    <div className="text-center position-relative">
      <div className="carousel-container">
        <Carousel>
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 carousel-image"
                src={item.image}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      
      <div className="home-content">
        <h1 className="welcome-heading">Welcome to Sri Ram's Cafe</h1>
        <p>100% Pure Vegetarian Delights – Taste That Feels Like Home</p>
        <p>We offer the best taste with neat and hygienic cooking practices.</p>
      </div>
    </div>
  );
};

export default Home;