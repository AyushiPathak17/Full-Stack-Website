import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCheck } from 'react-icons/fa';

const ThankYouScreen = () => {
  const navigate = useNavigate();

  const handleResendEmail = () => {
    // Placeholder function for resending the confirmation email
    console.log('Resending confirmation email...');
  };

  return (
    <div className="ThankYouScreen">
      <div className="content">
        <div className="header">
          <h2 className="heading">Thank You!</h2>
          <p className="subtext">Your registration is complete.</p>
          <p className="subtext">Please verify your email to continue.</p>
        </div>
        <div className="email-icon">
          <FaEnvelope className="icon" />
          <FaCheck className="check-icon" />
        </div>
        <p className="instruction">Click the confirmation link in that email to begin using Brittle.</p>
        <p className="help-text">
          Didn't receive the email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can
          <span className="change-email" onClick={handleResendEmail}> resend the confirmation email.</span>
        </p>
        <p className="change-text">Wrong email address? <span className="change-email">Change it.</span></p>
      </div>
    </div>
  );
};

export default ThankYouScreen;
