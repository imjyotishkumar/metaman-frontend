'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Image from "next/image";
import Payment from "./PaymentButton";

const UserDetail: React.FC = () => {
    const searchParams = useSearchParams();
    const fullSearchString = searchParams.toString();
    const userId = fullSearchString.split('=')[0];

    interface User {
        imageurl?: string;
    }

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!userId) {
                console.log("User ID not found");
                console.log(false);
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
            } finally {
                console.log(false);
            }
        };
        fetchData();
    }, [userId, setUser]);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState<number | null>(null);
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [village, setVillage] = useState("");
    const [pincode, setPincode] = useState<number | null>(null);
    const [nearby, setNearby] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('https://mataman-backend.vercel.app/userdetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, mobile, state, district, village, pincode, nearby })
        });
        const data = await response.json();
        console.log(data.message);
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="md:flex justify-around  mt-5 mb-4">
                <div className=" ">

                    <Image src={user?.imageurl || "/placeholder-image.png"} alt="User Image" width={450} height={450} />
                </div>
                <div className="flex md:w-1/2">
                    <div className=" rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-4">Enter Your Detail</h1>
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className=" cursor-pointer font-[700] text-black px-4 py-2 rounded w-full">
                                <div>
                                    <Payment
                                        customer_id={mobile ?? 0}
                                        customer_name={name}
                                        customer_email={email}
                                        customer_phone={mobile ?? 0}
                                        order_amount={2}
                                    />                                </div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserDetail;