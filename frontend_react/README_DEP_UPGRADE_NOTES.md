# Dependency Upgrade Notes

This project uses Create React App 5 (react-scripts 5.0.1). To preserve compatibility while upgrading to the latest packages:

- React remains on 18.x (react 18.3.x) to avoid breaking changes with CRA 5 (React 19 is not supported by CRA 5).
- react-router-dom upgraded to the latest v6 line.
- Testing libraries upgraded to latest stable:
  - @testing-library/jest-dom ^6.x
  - @testing-library/react ^16.x
  - @testing-library/user-event ^14.x
- web-vitals upgraded to ^3.x, which is compatible with CRA 5.

Upgrade steps to finalize on your machine/CI:
1) cd figma-to-react-ui-development-18171-18180/frontend_react
2) npm install
3) npm test
4) npm start

If you see lint/test type errors from @testing-library updates, ensure your setupTests.js includes:
  import '@testing-library/jest-dom';

No other code changes should be required for these upgrades with React 18 and CRA 5.
