import React from 'react';
import './Header.css';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <div className="logo" onClick={() => setActiveSection('home')}>
        <h1>RAFAH</h1>
      </div>
      <nav>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setActiveSection('home');
            }}>Home</a>
          </li>
          <li className={activeSection === 'menu' ? 'active' : ''}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setActiveSection('menu');
            }}>Menu</a>
          </li>
          <li className={activeSection === 'gallery' ? 'active' : ''}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setActiveSection('gallery');
            }}>Gallery</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setActiveSection('contact');
            }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;