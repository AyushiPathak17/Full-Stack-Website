import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfileSetupScreen = ({ userData }) => {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    // Save data to localStorage or your preferred storage method
    localStorage.setItem('profileData', JSON.stringify({ avatar, location }));

    // Navigate to the next screen
    navigate('/final-screen');
  };

  return (
    <div className="ProfileSetupScreen">
      <div className="left-section">
        <h2 className='profile-heading'>Hey, Let's create your profile</h2>
        <p className='profile-paragraph'>Let others get to know you better! You can do these later</p>
        <span className='avatar-text'>Add an Avatar</span>
        <div className="avatar-section">
          <div className={`avatar-circle ${avatar ? 'avatar-preview' : ''}`}>
            {avatar ? <img src={avatar} alt="Avatar Preview" className="avatar-img" /> : <FaCamera className="camera-icon" />}
          </div>
          <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleAvatarUpload} className='choose-image-button'/>
        </div>
        <label htmlFor="location" className='avatar-text'>Add Your Location</label>
        <input type="text" id="location" name="location" value={location} onChange={handleLocationChange} className="location-text-input" placeholder='Enter a location'/>
      </div>
      <div className="right-section">
        <button type="button" className="submit-btn" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default ProfileSetupScreen;
