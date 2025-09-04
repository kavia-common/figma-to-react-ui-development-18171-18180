# Home Screen (Figma 2535:46)

This folder contains the modular React implementation of the extracted Home screen.

Structure:
- Home.jsx: Main screen composed of Header, Sidebar, Main sections.
- Home.module.css: Component-scoped styles composed from assets/home-2535-46.css.
- tokens.module.css: Bridges global utility classes and typography tokens from assets/common.css into CSS Modules for ergonomic usage.

Notes:
- The screen preserves a fixed desktop canvas width (1440px) per Figma. Horizontal scrolling is allowed below 1440px.
- Interactive elements (CTA and nav items) mirror the console logging behavior from assets/app.js.
- Design tokens are used via CSS variables from assets/common.css.
