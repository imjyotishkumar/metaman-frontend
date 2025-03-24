// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// interface PaymentProps {
//   customer_id: number | "";
//   customer_name: string;
//   customer_email: string;
//   customer_phone: number | "";
//   order_amount: number | "";
// }
// const Payment:  React.FC<PaymentProps> = (props) => {
//   const [formData] = useState({
//     customer_id: props.customer_id,
//     customer_name: props.customer_name,
//     customer_email: props.customer_email,
//     customer_phone: props.customer_phone,
//   });

 

//   const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     if (!formData.customer_name || !formData.customer_email || !formData.customer_phone) {
//       alert('Please fill all details');
//       return;
//     }

//     try {
//       const response = await axios.post('https://mataman-backend.vercel.app/paymentroutes/payment', {
//         order_amount: props.order_amount,
//         order_currency: 'INR',
//         order_id: `order_${Date.now()}`,
//         customer_details: formData,
//       });

//       if (response.data && response.data.payment_link) {
//         window.location.href = response.data.payment_link; // Redirect to payment
//       }
//     } catch (error) {
//       console.error('Payment Error:', error);
//       alert('Payment failed! Try again.');
//     }
//   };

//   return (
//     <>
//     <div className="flex items-center justify-center ">
//       <div className=" rounded-lg shadow-lg w-96">      
//         <button
//           onClick={handleClick}
//           className="w-full bg-black-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Payment;
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page