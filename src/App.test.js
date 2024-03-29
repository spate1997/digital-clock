import React from 'react';
import { render, screen,  } from '@testing-library/react';
import Clock from './Clock';

test('renders the clock component', () => {
  render(<Clock />);
  const clockElement = screen.getByTestId('clock');
  expect(clockElement).toBeInTheDocument();
});