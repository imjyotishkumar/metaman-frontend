"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Link from "next/link";
import Footer from "./Footer";

interface User {
    _id: string;
    category: string;
    imageurl: string;
    title: string;
    description: string;
    oldprice: number;
    newprice: number;
}

interface FetchUserProps {
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const FetchUser = ({ setUser, setLoading, setError }: FetchUserProps) => {
    const searchParams = useSearchParams();
    const fullSearchString = searchParams.toString();
    const userId = fullSearchString.split('=')[0];

    useEffect(() => {
        const fetchData = async () => {
            if (!userId) {
                setError("User ID not found");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://mataman-backend-ruddy.vercel.app/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setUser(data.user || null);
            } catch (err) {
                setError("Failed to fetch user data");
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [userId, setUser, setLoading, setError]);

    return null;
};

const Checkout = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [size, setSize] = useState<string>("20 ML");
    const [quantity, setQuantity] = useState<number>(1);
    const searchParams = useSearchParams();
    const fullSearchString = searchParams.toString();
    const userId = fullSearchString.split('=')[0];
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        try {
            const response = await fetch("https://mataman-backend-ruddy.vercel.app/userbuy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    category: user.category,
                    imageurl: user.imageurl,
                    title: user.title,
                    newprice: user.newprice,
                    size,
                    quantity,
                }),
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error("Error submitting order", error);
        }
    };

    return (
        <>
            <FetchUser setUser={setUser} setLoading={setLoading} setError={setError} />
            
                <Header />
                <Navbar />
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : user ? (
                        <>
                            <div className="flex flex-col md:flex-row md:w-full justify-around">
                                <div className="md:w-1/2 flex gap-5 rounded-lg shadow-lg">
                                    <Image src={user.imageurl} height={500} width={480} alt={user.title} className="rounded-md" />
                                </div>
                                <div className="md:w-1/2">
                                    <form onSubmit={handleSubmit}>
                                        <h2 className="text-2xl md:text-3xl font-bold mt-5 md:mt-0">{user.title}</h2>
                                        <div className="flex items-center gap-5">
                                            <p className="font-bold text-lg">From ₹{user.newprice}</p>
                                            <p className="text-gray-500 line-through">₹{user.oldprice}</p>
                                        </div>
                                        <div className="bg-black text-white mt-4 rounded-md w-full">
                                            <div className="flex items-center border-b border-white mb-2 w-full">
                                                <span className="text-orange-400 text-lg">★★★★★</span>
                                                <span className="ml-2 text-gray-400">24 Reviews</span>
                                            </div>
                                            <div className="mb-4 flex flex-col gap-2">
                                                <label className="text-gray-200 text-lg">Size</label>
                                                <select
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="w-full p-2 bg-black border border-gray-600 text-white rounded-md cursor-pointer"
                                                >
                                                    <option>20 ML</option>
                                                    <option>100 ML</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 flex items-center gap-5">
                                                <label className="text-gray-200 md:text-lg">Quantity</label>
                                                <select
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                                    className="p-2 border border-gray-600 bg-black text-white rounded-md cursor-pointer"
                                                >
                                                    {[1, 2, 3, 4, 5].map((num) => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                                <button className="flex-1 cursor-pointer border text-[12px] md:text-[12px] border-white p-2 rounded-md font-semibold">
                                                    ADD TO CART
                                                </button>
                                            </div>
                                            <div className="flex flex-col gap-4 mt-4">
                                                <button className="md:w-1/3 border-2 border-red-500 text-white p-2 rounded-md text-sm">
                                                    BUY 2 100ML @ ₹999
                                                </button>
                                                <button className="md:w-1/3 border-2 border-red-500 text-white p-2 rounded-md text-sm">
                                                    1 100ML & 2 20ML @ ₹999
                                                </button>
                                            </div>
                                            <Link href={`/userdetail?${userId}`}>
                                            <button type="submit" className="cursor-pointer w-full bg-white text-black p-3 mt-6 rounded-md font-semibold">
                                                BUY IT NOW
                                            </button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="text-red-500">User not found</p>
                    )}
                </div>
                <Footer/>
            </>
        
    );
};

export default Checkout;
