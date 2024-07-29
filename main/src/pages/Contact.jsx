import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (value.trim() === '') {
      error = `${name} is required`;
    } else if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submission
    let valid = true;
    let newErrors = {};

    for (const key in formData) {
      if (formData[key].trim() === '') {
        newErrors[key] = `${key} is required`;
        valid = false;
      } else if (key === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData[key])) {
        newErrors[key] = 'Invalid email address';
        valid = false;
      }
    }

    setErrors(newErrors);

    if (valid) {
      // Handle form submission (e.g., send the data to an API or email service)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <main>
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    </main>
  );
};

export default Contact;
