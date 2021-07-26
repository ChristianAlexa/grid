import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Grid HomePage text', () => {
  render(<App />);
  const gridTextElement = screen.getByText(/Grid HomePage/i);
  expect(gridTextElement).toBeInTheDocument();
});
