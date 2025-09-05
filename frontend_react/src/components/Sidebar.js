import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

/**
 * PUBLIC_INTERFACE
 * Sidebar component containing app navigation items.
 * Includes a new 'Support' item as requested.
 */
function Sidebar() {
  // Using semantic aside for sidebar navigation
  return (
    <aside className="sidebar" aria-label="Sidebar Navigation">
      <div className="sidebar__brand">
        <span className="sidebar__logo" aria-hidden="true">🧭</span>
        <span className="sidebar__title">App</span>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list" role="list">
          <li className="sidebar__item">
            <NavLink to="/" end className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
              <span className="sidebar__icon" aria-hidden="true">🏠</span>
              <span className="sidebar__text">Home</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/about" className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
              <span className="sidebar__icon" aria-hidden="true">ℹ️</span>
              <span className="sidebar__text">About</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/support" className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
              <span className="sidebar__icon" aria-hidden="true">🛟</span>
              <span className="sidebar__text">Support</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
