import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && (
          <div className="hero-section">
            <div className="hero-content">
              <h1>RAFAH RESTAURANT</h1>
              <p>Experience the authentic taste of tradition</p>
              <button onClick={() => setActiveSection('menu')}>View Our Menu</button>
            </div>
          </div>
        )}
        
        {activeSection === 'menu' && <Menu />}
        
        {activeSection === 'gallery' && <Gallery />}
        
        {activeSection === 'contact' && <Contact />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;