import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders display component', () => {
  render(<App />);
  const displayElement = screen.getByText(/0.00/i);
  expect(displayElement).toBeInTheDocument();
});
