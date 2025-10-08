import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('should render the label', () => {
    render(<Button label="C" onClick={() => {}} />);
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="=" onClick={handleClick} />);
    fireEvent.click(screen.getByText('='));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply the default style by default', () => {
    const { container } = render(<Button label="1" onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('default');
  });

  it('should apply the operator style when type is operator', () => {
    const { container } = render(<Button label="+" onClick={() => {}} type="operator" />);
    expect(container.firstChild).toHaveClass('operator');
  });

  it('should apply the clear style when type is clear', () => {
    const { container } = render(<Button label="C" onClick={() => {}} type="clear" />);
    expect(container.firstChild).toHaveClass('clear');
  });
});
