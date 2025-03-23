'use client'
import Image from "next/image"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import Collections from "../collections/page";
import Footer from "../Components/Footer";

const Home = () => {
    const [position, setPosition] = useState(100);
    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => (prev > -400 ? prev - 0.5 : 100));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <div>
                    <Image src={`https://metaman.in/cdn/shop/files/Artboard_6_3.jpg?v=1741598701&width=1950`} alt="" width={600} height={400} className="w-full hidden md:block " />
                    <Image src={`https://metaman.in/cdn/shop/files/Artboard_7_3.jpg?v=1741598701&width=540`} alt="" width={600} height={600} className="w-full md:hidden  " />
                </div>
                <div className="overflow-hidden w-full bg-black text-white p-1">
                    <div
                        style={{ transform: `translateX(${position}%)` }}
                        className="flex whitespace-nowrap text-[12px] font-[300] gap-4"
                    >
                        {Array(1000)
                            .fill("Discover your scent of victory!")
                            .map((text, index) => (
                                <p key={index} className="w-full text-center">{text}</p>
                            ))}
                    </div>
                </div>
                <div className=" w-full h-[40vh] p-4 flex flex-col items-center text-center md:text-left md:flex-row md:justify-center md:items-center">
                    <div className="">
                        <h2 className="text-xl md:text-3xl mb-2 font-bold">The Essence of <span className="block md:inline">METAMAN</span></h2>
                        <p className="text-sm md:text-lg mt-2">Crafting Fragrances that Embody Strength and Elegance in Every Moment.</p>
                    </div>
                </div>

            </div>
            <Collections/>
            <Footer/>
        </div>
    )
}

export default Home