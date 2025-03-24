'use client';

import { useState } from 'react';
import axios from 'axios';

const Payment: React.FC = () => {
  const [formData, setFormData] = useState({
    customer_id: '',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.customer_name || !formData.customer_email || !formData.customer_phone) {
      alert('Please fill all details');
      return;
    }

    try {
      const response = await axios.post('https://mataman-backend.vercel.app/paymentroutes/payment', {
        order_amount: 1.00,
        order_currency: 'INR',
        order_id: `order_${Date.now()}`,
        customer_details: formData,
      });

      if (response.data && response.data.payment_link) {
        window.location.href = response.data.payment_link; // Redirect to payment
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment failed! Try again.');
    }
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen ">
      <div className=" p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Cashfree Payment Gateway
        </h1>
        <input
          type="text"
          name="customer_id"
          placeholder="Enter your id"
          value={formData.customer_id}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="customer_name"
          placeholder="Enter your name"
          value={formData.customer_name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="customer_email"
          placeholder="Enter your email"
          value={formData.customer_email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="customer_phone"
          placeholder="Enter your phone number"
          value={formData.customer_phone}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Pay Now
        </button>
      </div>
    </div>
    </>
  );
};

export default Payment;
