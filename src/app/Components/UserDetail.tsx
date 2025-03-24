'use client';
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Image from "next/image";
import Payment from "./PaymentButton";
import Footer from "./Footer";

const UserDetail: React.FC = () => {
    const searchParams = useSearchParams();
    const fullSearchString = searchParams.toString();
    const userId = fullSearchString.split('=')[0];

    interface User {
        imageurl?: string;
        newprice?: number;
    }

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!userId) {
                console.log("User ID not found");
                return;
            }

            try {
                const response = await fetch(`https://mataman-backend.vercel.app/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setUser(data.user || null);
            } catch (err) {
                console.log("Failed to fetch user data");
                console.log(err);
            }
        };
        fetchData();
    }, [userId]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState<number | null>(null);
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [village, setVillage] = useState("");
    const [pincode, setPincode] = useState<number | null>(null);
    const [nearby, setNearby] = useState("");

    const handleSubmit = async () => {
        try {
            const payload = {
                name,
                email,
                mobile: mobile?.toString() || "",
                state,
                district,
                village,
                pincode: pincode?.toString() || "",
                nearby,
            };
            console.log("Payload being sent to API:", payload);
    
            const response = await fetch('https://mataman-backend.vercel.app/userdetail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            console.log("Response status:", response.status);
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                throw new Error(`Failed to save user details: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("Data saved successfully:", data);
            return true; // Indicate success
        } catch (error) {
            console.error("Error saving user details:", error);
            return false; // Indicate failure
        }
    };

    const handlePaymentClick = async () => {
        const isSaved = await handleSubmit(); // Save data before payment
        if (isSaved) {
            console.log("User details saved. Proceeding to payment...");
        } else {
            alert("Failed to save user details. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="md:flex justify-around mt-5 mb-4">
                <div>
                    <Image src={user?.imageurl || "/placeholder-image.png"} alt="User Image" width={450} height={450} />
                </div>
                <div className="flex md:w-1/2">
                    <div className="rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-4">Enter Your Detail</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <div className="flex items-center border p-2 rounded mb-2 w-full">
                                <span className="mr-2">+91</span>
                                <input
                                    type="number"
                                    placeholder="Enter Mobile Number"
                                    value={mobile ?? ""}
                                    onChange={(e) => setMobile(e.target.value ? Number(e.target.value) : null)}
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                placeholder="District"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Village"
                                value={village}
                                onChange={(e) => setVillage(e.target.value)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Pincode"
                                value={pincode ?? ""}
                                onChange={(e) => setPincode(e.target.value ? Number(e.target.value) : null)}
                                className="border p-2 mb-2 w-full"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Nearby Landmark"
                                value={nearby}
                                onChange={(e) => setNearby(e.target.value)}
                                className="border p-2 mb-4 w-full"
                                required
                            />
                            <button onClick={handleSubmit} type="submit">
                            <Payment
                                customer_id={mobile ?? 0}
                                customer_name={name}
                                customer_email={email}
                                customer_phone={mobile ?? 0}
                                order_amount={user?.newprice ?? 0}
                                onClick={handlePaymentClick}
                            />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default UserDetail;