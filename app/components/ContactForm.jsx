'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        {['name', 'email', 'company'].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            required={field !== 'company'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            className="w-full p-4 rounded-lg shadow-md bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300"
          />
        ))}

        <select
          name="license"
          required
          onChange={handleChange}
          className="w-full p-4 rounded-lg shadow-md bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300"
        >
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Adobe">Adobe</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full p-4 rounded-lg shadow-md bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
