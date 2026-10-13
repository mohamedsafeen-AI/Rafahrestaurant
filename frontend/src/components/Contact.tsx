import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [showOwnerContact, setShowOwnerContact] = useState(false);
  const [ownerPhone, setOwnerPhone] = useState("+1 (555) 987-6543"); // Default owner phone, will be updated from API

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to: ${value}`);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    setShowOwnerContact(false);

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      
      // For testing, show the owner's phone number immediately
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your reservation request has been received. We will contact you shortly to confirm.');
      setShowOwnerContact(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Reservation error:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your reservation. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Make a reservation or send us a message.</p>
        
        <div className="info-item">
          <i className="icon location-icon">📍</i>
          <div>
            <h3>Address</h3>
            <p>123 Restaurant Street, Foodville, FD 12345</p>
          </div>
        </div>
        
        <div className="info-item">
          <i className="icon phone-icon">📞</i>
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="info-item">
          <i className="icon email-icon">✉️</i>
          <div>
            <h3>Email</h3>
            <p>info@rafahrestaurant.com</p>
          </div>
        </div>
        
        <div className="info-item">
          <i className="icon hours-icon">🕒</i>
          <div>
            <h3>Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
        </div>
      </div>
      
      <div className="reservation-form">
        <h2>Make a Reservation</h2>
        
        {submitMessage && (
          <div className={`submit-message ${submitStatus}`}>
            {submitMessage}
            {showOwnerContact && (
              <div className="owner-contact">
                <p>For immediate assistance, you can contact our restaurant owner directly at:</p>
                <p className="owner-phone">{ownerPhone}</p>
              </div>
            )}
          </div>
        )}
        
        <form onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                value={formData.time}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select 
              id="guests" 
              name="guests" 
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7+">7+ People</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Special Requests</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="submit-button" 
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Submitting...' : 'Reserve Table'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;