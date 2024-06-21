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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Information:</label>
          <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={form.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Guests:</label>
          <input type="number" name="guests" value={form.guests} onChange={handleChange} required min="1" />
        </div>
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default App;
