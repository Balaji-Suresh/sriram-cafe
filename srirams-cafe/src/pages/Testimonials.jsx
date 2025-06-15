import React from "react";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "The best South Indian food I've had in Chennai! The dosas are crispy and the sambhar is perfect. Highly recommend for family dinners.",
      date: "October 2023"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      text: "Amazing vegetarian options and the service is excellent. The lunch subscription is worth every rupee. Will definitely continue ordering.",
      date: "November 2023"
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 4,
      text: "Great food and ambiance. The idlis are soft and fluffy. Only giving 4 stars because the wait time can be long during peak hours.",
      date: "December 2023"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      text: "Authentic South Indian cuisine with a modern touch. The staff is friendly and the place is very clean. Perfect for family gatherings.",
      date: "January 2024"
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`bi ${i < rating ? "bi-star-fill" : "bi-star"} text-warning`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="page-container">
      <h1 className="page-title mt-0">Testimonials</h1>
      
      <div className="form-card text-center">
        <h4 className="mb-4">What Our Customers Say</h4>
        
        <div className="video-container mb-5">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Customer Testimonial Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        
        <h5 className="mb-3">Google Reviews</h5>
        <Carousel 
          className="review-carousel"
          indicators={false}
          interval={5000}
        >
          {reviews.map(review => (
            <Carousel.Item key={review.id}>
              <div className="review-card">
                <div className="d-flex justify-content-center mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.name}</p>
                <small className="text-muted">{review.date}</small>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;