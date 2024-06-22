import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders table booking form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Table Booking/i);
  expect(linkElement).toBeInTheDocument();
});

test('form submission alerts booking details', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2023-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:30' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });

  window.alert = jest.fn();
  
  fireEvent.click(screen.getByText(/Book Table/i));
  expect(window.alert).toHaveBeenCalledWith('Booking Details:\nName: John Doe\nContact: john@example.com\nDate: 2023-12-25\nTime: 18:30\nGuests: 4');
});
