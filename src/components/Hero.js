import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import heroimg from '../images/hero.jpg';
import axios from 'axios'; // Import axios for making API calls

const Hero = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agree: false, // Assuming a checkbox for agreement
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: val }));
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make API call to backend server
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log(response.data); // Log the response from the backend

      // Redirect to profile setup screen after account creation
      navigate('/profile-setup');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="hero">
      <div className="container flex">
        <div className="image-container">
          <img src={heroimg} alt="a man working on laptop" className="image" />
        </div>
        <div className="form-container">
          <h1 className="hero-heading">Welcome to Brittle</h1>
          <p className="subtext">Join us and start your journey today!</p>
          <form onSubmit={handleCreateAccount}>
            {/* Add form fields */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="agree" name="agree" onChange={handleInputChange} />
              <label htmlFor="agree">
                I agree to the <a href="termsofservice">Terms of Service</a>, <a href="privacypolicy">Privacy Policy</a>, and our default{' '}
                <a href="notificationsettings">Notification Settings.</a>
              </label>
            </div>
            <button type="submit" className="create-account-btn">
              Create Account
            </button>
          </form>
          <p className="sign-in-text">
            Already a member? <a href="sign.in" className="sign-in-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
