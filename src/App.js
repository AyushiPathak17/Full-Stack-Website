import React, { useState } from 'react';
import axios from 'axios'; 
import Hero from './components/Hero';
import ProfileSetupScreen from './components/ProfileSetupScreen';
import FinalScreen from './components/FinalScreen';
import ThankYouScreen from './components/ThankYouScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; 

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleCreateAccount = async (data) => {
    try {
      // Make API call to backend server
      const response = await axios.post('http://localhost:5000/submit-form', data);
      console.log(response.data); // Log the response from the backend
      setUserData(data);
      // Redirect to profile setup screen after account creation
      return <Navigate to="/profile-setup" />;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero onCreateAccount={handleCreateAccount} />} />
        <Route
          path="/profile-setup"
          element={<ProfileSetupScreen userData={userData} />}
        />
        <Route path="/final-screen" element={<FinalScreen />} />
        <Route path="/thank-you-screen" element={<ThankYouScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
