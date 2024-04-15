import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

const FinalScreen = () => {
  const navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleFinish = () => {
    console.log('Finish button clicked');
    navigate('/thank-you-screen');
  };

  const handleCardClick = (setIsChecked) => () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="FinalScreen">
      <div className="content">
        <div className="header">
          <h2 className="heading">What brings you here today?</h2>
          <p className="subtext">Select the option that best describe you. Don't worry you can explore other options later</p>
        </div>
        <div className="cards">
          <div
            className={`card ${isChecked1 ? 'selected' : ''}`}
            onClick={handleCardClick(setIsChecked1)}
          >
            <h3 className="card-heading">Plan 1</h3>
            <img src={image1} alt="several person talking" className="card-image" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div
              className={`checkbox-container ${isChecked1 ? 'selected' : ''}`}
            >
              {isChecked1 && <FaCheckCircle className="checkbox-icon" />}
            </div>
          </div>
          <div
            className={`card ${isChecked2 ? 'selected' : ''}`}
            onClick={handleCardClick(setIsChecked2)}
          >
            <h3 className="card-heading">Plan 2</h3>
            <img src={image2} alt="laptop" className="card-image" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div
              className={`checkbox-container ${isChecked2 ? 'selected' : ''}`}
            >
              {isChecked2 && <FaCheckCircle className="checkbox-icon" />}
            </div>
          </div>
          <div
            className={`card ${isChecked3 ? 'selected' : ''}`}
            onClick={handleCardClick(setIsChecked3)}
          >
            <h3 className="card-heading">Plan 3</h3>
            <img src={image3} alt="two person" className="card-image" />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div
              className={`checkbox-container ${isChecked3 ? 'selected' : ''}`}
            >
              {isChecked3 && <FaCheckCircle className="checkbox-icon" />}
            </div>
          </div>
        </div>
        <button className="finish-btn" onClick={handleFinish}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;
