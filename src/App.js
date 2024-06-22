import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:\nName: ${form.name}\nContact: ${form.contact}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant</h1>
        <h2>Table Booking</h2>
      </header>
      <main>
        <form onSubmit={handleSubmit} aria-label="Table Booking Form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Information:</label>
            <input type="text" id="contact" name="contact" value={form.contact} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={form.time} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" value={form.guests} onChange={handleChange} required min="1" />
          </div>
          <button type="submit">Book Table</button>
        </form>
      </main>
    </div>
  );
}

export default App;
