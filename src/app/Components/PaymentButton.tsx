'use client';

import axios from 'axios';
interface PaymentProps {
    customer_id: number | null;
    customer_name: string;
    customer_email: string;
    customer_phone: number | null;
    order_amount: number;
}
const Payment: React.FC<PaymentProps> = (props) => {
    


    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!props.customer_name || !props.customer_email || !props.customer_phone) {
            alert('Please fill all details');
            return;
        }

        try {
            const payload = {
                order_amount: props.order_amount,
                order_currency: 'INR',
                customer_details: {
                    customer_id: props.customer_id ? String(props.customer_id) : "N/A",
                    customer_name: props.customer_name,
                    customer_email: props.customer_email,
                    customer_phone: props.customer_phone ? String(props.customer_phone) : "N/A",
                },
            };

            console.log("Payload being sent:", payload); // Debugging log

            const response = await axios.post('https://mataman-backend.vercel.app/paymentroutes/payment', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data && response.data.payment_link) {
                window.location.href = response.data.payment_link; // Redirect to payment
            } else {
                alert("Invalid response from the server.");
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment failed! Try again.');
        }
    };



    return (
        <>
            <div className="flex items-center justify-center ">
                <div className=" rounded-lg shadow-lg w-96">
                    <button
                        onClick={handleClick}
                        className="w-full bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-lg transition"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Payment;
