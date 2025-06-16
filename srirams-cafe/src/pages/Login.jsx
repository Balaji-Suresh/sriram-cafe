import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../assets/Main Logo.jpeg";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOtpLogin, setShowOtpLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication - accept any non-empty values
    if (userId && password) {
      // Successful login
      navigate("/");
    } else {
      setError("Please enter both email/phone and password");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (phone && otp) {
      alert(`Password reset verified for ${phone}`);
      setShowForgotPassword(false);
    } else {
      setError("Please enter both phone number and OTP");
    }
  };

  const handleOtpLogin = (e) => {
    e.preventDefault();
    if (phone && otp) {
      alert(`OTP verified successfully for ${phone}`);
      navigate("/");
    } else {
      setError("Please enter both phone number and OTP");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password && email && phone) {
      alert(`Account created successfully for ${email}`);
      navigate("/");
    } else {
      setError("Please fill all required fields");
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Logging in with ${platform}...`);
    // In a real app, this would redirect to the OAuth flow
    setTimeout(() => navigate("/"), 1000);
  };

  const handleSendOtp = () => {
    if (phone) {
      alert(`OTP sent to ${phone}`);
    } else {
      setError("Please enter your phone number");
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Email or Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your email or phone number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="d-flex justify-content-between mb-3">
        <button 
          type="button" 
          className="btn btn-link p-0 text-decoration-none" 
          onClick={() => setShowForgotPassword(true)}
        >
          Reset Password
        </button>
        <button 
          type="button" 
          className="btn btn-link p-0 text-decoration-none" 
          onClick={() => setShowOtpLogin(true)}
        >
          Login with OTP
        </button>
      </div>
      <button type="submit" className="btn btn-green w-100 mb-3">Login</button>
      <div className="text-center mb-3">
        <span>Or login with</span>
      </div>
      <div className="d-flex justify-content-center gap-4 mb-3">
        <button 
          type="button" 
          className="btn btn-light rounded-circle p-2 shadow-sm" 
          onClick={() => handleSocialLogin("Facebook")}
          title="Login with Facebook"
        >
          <i className="bi bi-facebook text-primary fs-4"></i>
        </button>
        <button 
          type="button" 
          className="btn btn-light rounded-circle p-2 shadow-sm" 
          onClick={() => handleSocialLogin("Google")}
          title="Login with Google"
        >
          <i className="bi bi-google text-danger fs-4"></i>
        </button>
      </div>
      <div className="text-center">
        <span>Don't have an account? </span>
        <button 
          type="button" 
          className="btn btn-link p-0 text-decoration-none" 
          onClick={() => setShowSignUp(true)}
        >
          Sign Up
        </button>
      </div>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleForgotPassword}>
      <h5 className="text-center mb-3">Reset Password</h5>
      <div className="mb-3">
        <label htmlFor="resetPhone" className="form-label">Phone Number</label>
        <div className="input-group">
          <input
            type="tel"
            className="form-control"
            id="resetPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
          <button 
            type="button" 
            className="btn btn-outline-success" 
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="resetOtp" className="form-label">OTP</label>
        <input
          type="text"
          className="form-control"
          id="resetOtp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
      </div>
      <button type="submit" className="btn btn-green w-100 mb-3">Verify & Reset</button>
      <div className="text-center">
        <button 
          type="button" 
          className="btn btn-link text-decoration-none" 
          onClick={() => setShowForgotPassword(false)}
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  const renderOtpLoginForm = () => (
    <form onSubmit={handleOtpLogin}>
      <h5 className="text-center mb-3">Login with OTP</h5>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <div className="input-group">
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
          <button 
            type="button" 
            className="btn btn-outline-success" 
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="otp" className="form-label">OTP</label>
        <input
          type="text"
          className="form-control"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
      </div>
      <button type="submit" className="btn btn-green w-100 mb-3">Verify & Login</button>
      <div className="text-center">
        <button 
          type="button" 
          className="btn btn-link text-decoration-none" 
          onClick={() => setShowOtpLogin(false)}
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  const renderSignUpForm = () => (
    <form onSubmit={handleSignUp}>
      <h5 className="text-center mb-3">Create Account</h5>
      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="signupEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="signupPhone" className="form-label">Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          id="signupPhone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="signupPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a password"
          required
        />
      </div>
      <button type="submit" className="btn btn-green w-100 mb-3">Sign Up</button>
      <div className="text-center mb-3">
        <span>Or sign up with</span>
      </div>
      <div className="d-flex justify-content-center gap-4 mb-3">
        <button 
          type="button" 
          className="btn btn-light rounded-circle p-2 shadow-sm" 
          onClick={() => handleSocialLogin("Facebook")}
          title="Sign up with Facebook"
        >
          <i className="bi bi-facebook text-primary fs-4"></i>
        </button>
        <button 
          type="button" 
          className="btn btn-light rounded-circle p-2 shadow-sm" 
          onClick={() => handleSocialLogin("Google")}
          title="Sign up with Google"
        >
          <i className="bi bi-google text-danger fs-4"></i>
        </button>
      </div>
      <div className="text-center">
        <button 
          type="button" 
          className="btn btn-link text-decoration-none" 
          onClick={() => setShowSignUp(false)}
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  const renderActiveForm = () => {
    if (showForgotPassword) return renderForgotPasswordForm();
    if (showOtpLogin) return renderOtpLoginForm();
    if (showSignUp) return renderSignUpForm();
    return renderLoginForm();
  };

  return (
    <div className="login-container" style={{ position: "relative" }}>
      <img 
        src={mainLogo} 
        alt="Background Logo" 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          opacity: 0.2,
          zIndex: -1
        }} 
      />
      <div className="login-form-container">
        <h2 className="text-center text-success mb-4">Sri Ram's Cafe</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {renderActiveForm()}
      </div>
    </div>
  );
};

export default Login;