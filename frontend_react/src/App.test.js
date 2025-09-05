import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page title and sidebar links', () => {
  render(<App />);
  // Home route should be the default; assert Home title rendered
  expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();

  // Sidebar navigation items should be visible
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /support/i })).toBeInTheDocument();

  // Theme toggle should be present
  expect(
    screen.getByRole('button', { name: /switch to (dark|light) mode/i })
  ).toBeInTheDocument();
});
