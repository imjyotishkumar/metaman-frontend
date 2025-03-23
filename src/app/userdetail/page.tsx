'use client'
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Link from "next/link";

const UserDetail: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState<number | "">("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [village, setVillage] = useState("");
    const [pincode, setPincode] = useState<number | "">("");
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
        <Header/>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="p-6 rounded-lg shadow-md">
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
                            value={mobile} 
                            onChange={(e) => setMobile(Number(e.target.value) || "")}
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
                        value={pincode} 
                        onChange={(e) => setPincode(Number(e.target.value) || "")}
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
                    <Link href={`/payment`}>
                    <button type="submit" className="bg-white  cursor-pointer font-[700] text-black px-4 py-2 rounded w-full">
                        Continue →
                    </button>
                    </Link>
                </form>
            </div>
        </div>
        </>
    );
};

export default UserDetail;