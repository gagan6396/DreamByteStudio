import React, { useState } from 'react';
import { Camera, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../../style/ComingSoon.css';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    if (!email) return;
    
    setLoading(true);
    setError('');

    try {
      // Replace with your EmailJS credentials
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        to_email: 'pantprachi58@gmail.com',
        from_email: email,
        message: `New subscriber: ${email} has signed up for launch notifications.`,
        subscriber_email: email
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to subscribe. Please try again.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coming-soon-container pt-5">
      {/* Subtle background pattern */}
      <div className="bg-pattern"></div>

      {/* Floating camera elements */}
      <div className="floating-cameras">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-camera"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Camera className="camera-icon" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Logo */}
        <div className="logo-container animate-fade-in">
          <div className="logo-blur"></div>
          <div className="">
            <img src="/image/logo/Dbs.png" alt="Logo" className="logo"/>
          </div>
        </div>

        {/* Brand name */}
        <div className="brand-container animate-fade-in delay-200">
          <h1 className="brand-name">
            DREAM BYTE <span className="brand-bold">STUDIO</span>
          </h1>
          <div className="brand-subtitle">
            <div className="line"></div>
            <span className="subtitle-text">Photography Studio</span>
            <div className="line"></div>
          </div>
        </div>

        {/* Coming soon text */}
        <div className="coming-soon-text animate-fade-in delay-400">
          <h2 className="coming-soon-heading">Coming Soon</h2>
          <p className="coming-soon-description">
            We're crafting something beautiful. Get ready to capture life's precious moments 
            with unparalleled artistry and elegance.
          </p>
        </div>
      </div>
    </div>
  );
}