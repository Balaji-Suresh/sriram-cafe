import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title mt-0">About Us</h1>
      
      <div className="form-card">
        <div className="row">
          <div className="col-md-8">
            <h4>Our Story</h4>
            <p>Sriram's Cafe is a vegetarian-only family restaurant known for its homely food, hygiene, and traditional cooking.</p>
            <p>Established in 2020, we have been serving authentic South Indian cuisine with a focus on quality ingredients and traditional recipes passed down through generations.</p>
            <p>Our mission is to provide a taste of home to our customers, with food that is prepared with love and care, just like it would be in a family kitchen.</p>
          </div>
          
          <div className="col-md-4">
            <h4>Contact Information</h4>
            <div className="mb-3">
              <p><strong>Address:</strong><br />No. 10, Food Street, Chennai – 600001</p>
              <p><strong>Phone:</strong><br />+91-9876543210</p>
              <p><strong>Email:</strong><br />contact@sriramscafe.in</p>
            </div>
            
            <h5>Opening Hours</h5>
            <p>Monday - Sunday: 7:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;