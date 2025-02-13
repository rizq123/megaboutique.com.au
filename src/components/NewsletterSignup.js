'use client';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="bg-[#FC6D46] text-white py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">JOIN OUR NEWSLETTER</h2>
      <p className="mb-4">Sign up to be the first to know our new arrivals, special sales and more!</p>
      <form onSubmit={handleSubmit} className="flex justify-center max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 w-full text-gray-800 rounded-l-md focus:outline-none"
        />
        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-r-md font-semibold">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
