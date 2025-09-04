import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import QR from './screens/QR/QR';

// PUBLIC_INTERFACE
function App() {
  /** Root App component that applies theme and handles routing between pages. */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ minHeight: 'auto' }}>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/qr" className="nav-link">QR</Link>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qr" element={<QR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
