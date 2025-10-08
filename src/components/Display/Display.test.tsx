import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Display from './Display';

describe('Display Component', () => {
  it('should render the value passed as a prop', () => {
    const testValue = '123.456';
    render(<Display value={testValue} />);
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('123.456');
  });

  it('should render integer values correctly', () => {
    const testValue = '789';
    render(<Display value={testValue} />);
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('789');
    expect(displayElement.textContent).not.toContain('.');
  });

  it('should handle zero correctly', () => {
    const testValue = '0';
    render(<Display value={testValue} />);
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('0');
  });
});
