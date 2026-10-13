import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RAFAH RESTAURANT</h3>
          <p>Serving authentic cuisine with passion and dedication since 2010.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123 Restaurant Street, Foodville, FD 12345</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ info@rafahrestaurant.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Rafah Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;