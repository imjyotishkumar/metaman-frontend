'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Logo and Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4"> 
                      <Image src={`/assets/White_Logo_Metaman.avif`} height={100} width={100} alt=''/>
                    </h2>
                    <h3 className="font-semibold mb-2">QUICK LINKS</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">ABOUT US</Link></li>
                        <li><Link href="#" className="hover:underline">FAQS</Link></li>
                        <li><Link href="collections/all" className="hover:underline">SHOP ALL</Link></li>
                        <li><Link href="#" className="hover:underline">CONTACT US</Link></li>
                    </ul>
                </div>
                
                {/* Legal Information */}
                <div>
                    <h3 className="font-semibold mb-2 mt-3">LEGAL INFORMATION</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">PRIVACY POLICY</Link></li>
                        <li><Link href="#" className="hover:underline">CANCELLATION POLICY</Link></li>
                        <li><Link href="#" className="hover:underline">REFUND POLICY</Link></li>
                        <li><Link href="#" className="hover:underline">SHIPPING POLICY</Link></li>
                        <li><Link href="#" className="hover:underline">TERMS OF SERVICE</Link></li>
                    </ul>
                </div>
                
                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-2">NEWSLETTER</h3>
                    <p className="mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <p className="text-xs mt-2 text-gray-400">This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
            <div className='mt-5 p-4 flex justify-around items-center'>
                <Link href={`https://drive.google.com/file/d/10ZgZxP3NsTws0IKA4NpibgutF3q84RmQ/view?usp=drive_link`}>
                    <button>Cancellation & Refund Policy</button>
                </Link>
                <Link href={`https://drive.google.com/file/d/1-AiI2TuZ8fuZYL_4yLiCFiprMhrqsQoj/view?usp=drive_link`}>
                    <button>Terms & Conditions</button>
                </Link>
                <Link href={`https://drive.google.com/file/d/1HIypkWqx5x1DY_h7UVrPCPPo3Fm6erES/view`}>
                    <button>Contact Us</button>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;