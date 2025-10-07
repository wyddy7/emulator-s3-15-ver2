import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Display from './Display';

describe('Display Component', () => {
  it('should render the value passed as a prop', () => {
    const testValue = '123.456';
    render(<Display value={testValue} />);

    const displayElement = screen.getByText(testValue);
    expect(displayElement).toBeInTheDocument();
  });
});
