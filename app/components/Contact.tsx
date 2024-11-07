"use client";

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 3,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      rating: 3,
    });
    setSubmitted(false);
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-md bg-base-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-primary p-6">
          <h2 className="text-3xl font-extrabold text-primary-content text-center">Contact Us</h2>
        </div>
        
        <div className="p-8">
          {submitted ? (
            <div className="alert alert-success">
              <div>
                <h3 className="font-bold text-lg">Thank you for your submission!</h3>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
                <p>Rating: {formData.rating}/5</p>
                <button 
                  onClick={handleClear}
                  className="btn btn-sm btn-ghost mt-4"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content/50"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="textarea textarea-bordered w-full bg-base-200 text-base-content placeholder-base-content/50"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Rating</span>
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer text-2xl transition-colors ${
                        star <= formData.rating 
                          ? 'text-warning'
                          : 'text-base-300'
                      }`}
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="btn flex-1"
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}