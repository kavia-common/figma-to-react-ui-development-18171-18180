import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Support from './pages/Support';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <header className="App-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Current theme: <strong>{theme}</strong>
            </p>
          </header>
          <section>
            <Routes>
              <Route path="/" element={
                <div className="container" style={{ padding: '24px' }}>
                  <h2 className="title">Home</h2>
                  <p className="description">Welcome! Use the sidebar to navigate. The new Support page is available.</p>
                </div>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
