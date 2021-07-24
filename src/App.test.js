import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/dork squad/i);
  expect(linkElement).toBeInTheDocument();
});
