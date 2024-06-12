import React, { useState } from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    description: '',
    service: 'Select a service',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return !email || regex.test(email)
      ? null
      : 'Please enter a valid email address';
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return !phone || regex.test(phone)
      ? null
      : 'Please enter a 10-digit phone number';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      const error = validateEmail(value);
      setErrors({ ...errors, email: error });
    }

    if (name === 'phone') {
      const error = validatePhone(value);
      setErrors({ ...errors, phone: error });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email) && !validatePhone(formData.phone)) {
      // Continue with form submission (send data to the server)
      // ...
    } else {
      console.log('Form contains validation errors. Please fix them.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.phone}</span>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.email}</span>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="service">Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="Select a service" disabled>
            Select a service
          </option>
          <option value="Service A">Service A</option>
          <option value="Service B">Service B</option>
          <option value="Service C">Service C</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
