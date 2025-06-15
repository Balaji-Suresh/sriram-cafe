import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import MapPicker from "../components/MapPicker";
import "react-datepicker/dist/react-datepicker.css";

const Account = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  
  const [showPauseForm, setShowPauseForm] = useState(false);
  const [pauseStartDate, setPauseStartDate] = useState(new Date());
  const [pauseEndDate, setPauseEndDate] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [mapLocation, setMapLocation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save this data to a database
    alert("Account information saved!");
  };
  
  const handlePauseSubmit = (e) => {
    e.preventDefault();
    if (!pauseStartDate || !pauseEndDate) {
      alert("Please select both start and end dates");
      return;
    }
    
    // In a real app, you would save this to a database
    alert(`Lunch delivery paused from ${pauseStartDate.toLocaleDateString()} to ${pauseEndDate.toLocaleDateString()}`);
    setShowPauseForm(false);
  };
  
  const handleLocationSelect = (address, location) => {
    setFormData(prev => ({
      ...prev,
      address
    }));
    setMapLocation(location);
  };

  return (
    <div className="page-container">
      <h1 className="page-title mt-0">My Account</h1>
      
      <div className="cards-container">
        <div className="form-card">
          <h4>Personal Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Delivery Address</label>
              {!showMap ? (
                <>
                  <textarea
                    className="form-control mb-2"
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button 
                    type="button" 
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => setShowMap(true)}
                  >
                    <i className="bi bi-geo-alt"></i> Pick from Map
                  </button>
                </>
              ) : (
                <>
                  <MapPicker onLocationSelect={handleLocationSelect} />
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setShowMap(false)}
                  >
                    <i className="bi bi-x"></i> Close Map
                  </button>
                </>
              )}
            </div>
            
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-green">Save Changes</button>
              <Link to="/subscription" className="btn btn-outline-success">Manage Subscription</Link>
            </div>
          </form>
        </div>
        
        <div className="form-card">
          <h4>Lunch Delivery Management</h4>
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
          {!showPauseForm ? (
            <div className="text-center">
              <p className="mb-4">You can temporarily pause your lunch delivery service when you're away.</p>
              <button 
                className="btn btn-outline-warning btn-lg" 
                onClick={() => setShowPauseForm(true)}
              >
                Pause Lunch Delivery
              </button>
            </div>
          ) : (
          <form onSubmit={handlePauseSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Pause From</label>
                <DatePicker
                  selected={pauseStartDate}
                  onChange={date => setPauseStartDate(date)}
                  selectsStart
                  startDate={pauseStartDate}
                  endDate={pauseEndDate}
                  minDate={new Date()}
                  className="form-control"
                />
              </div>
              
              <div className="col-md-6">
                <label className="form-label">Pause Until</label>
                <DatePicker
                  selected={pauseEndDate}
                  onChange={date => setPauseEndDate(date)}
                  selectsEnd
                  startDate={pauseStartDate}
                  endDate={pauseEndDate}
                  minDate={pauseStartDate}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-warning">Confirm Pause</button>
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={() => setShowPauseForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;