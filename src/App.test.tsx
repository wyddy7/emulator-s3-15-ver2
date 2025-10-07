import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const headline = screen.getByText(/Эмулятор калькулятора Электроника C3-15/i);
  expect(headline).toBeInTheDocument();
});
