import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Subscription = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [plan, setPlan] = useState("monthly");
  
  // Calculate end date based on selected plan
  const calculateEndDate = (start, selectedPlan) => {
    if (!start) return null;
    
    const end = new Date(start);
    
    switch (selectedPlan) {
      case "monthly":
        end.setMonth(end.getMonth() + 1);
        break;
      case "quarterly":
        end.setMonth(end.getMonth() + 3);
        break;
      case "annual":
        end.setFullYear(end.getFullYear() + 1);
        break;
      default:
        break;
    }
    
    return end;
  };
  
  // Handle plan selection
  const handlePlanChange = (selectedPlan) => {
    setPlan(selectedPlan);
    setEndDate(calculateEndDate(startDate, selectedPlan));
  };
  
  // Handle start date change
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(calculateEndDate(date, plan));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save this subscription to a database
    alert(`Subscription confirmed!\nPlan: ${plan}\nStart: ${startDate.toLocaleDateString()}\nEnd: ${endDate.toLocaleDateString()}`);
  };

  return (
    <div className="page-container">
      <h1 className="page-title mt-0">Lunch Subscription</h1>
      
      <div className="form-card">
        <h4 className="mb-3">Select a Subscription Plan</h4>
        
        <div className="subscription-options">
          <div 
            className={`subscription-option ${plan === "monthly" ? "selected" : ""}`}
            onClick={() => handlePlanChange("monthly")}
          >
            <h5>Monthly</h5>
            <p>Perfect for trying out our service</p>
            <h6>₹2,500/month</h6>
          </div>
          
          <div 
            className={`subscription-option ${plan === "quarterly" ? "selected" : ""}`}
            onClick={() => handlePlanChange("quarterly")}
          >
            <h5>Quarterly</h5>
            <p>Our most popular option</p>
            <h6>₹7,000/quarter</h6>
            <small className="text-success">Save ₹500</small>
          </div>
          
          <div 
            className={`subscription-option ${plan === "annual" ? "selected" : ""}`}
            onClick={() => handlePlanChange("annual")}
          >
            <h5>Annual</h5>
            <p>Best value for loyal customers</p>
            <h6>₹25,000/year</h6>
            <small className="text-success">Save ₹5,000</small>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Start Date</label>
              <div className="date-picker-container">
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="col-md-6">
              <label className="form-label">End Date</label>
              <div className="date-picker-container">
                <DatePicker
                  selected={endDate}
                  onChange={setEndDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  disabled
                  className="form-control"
                />
                <small className="text-muted d-block mt-1">End date is calculated based on your plan</small>
              </div>
            </div>
          </div>
          
          <button type="submit" className="btn btn-green w-100">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;