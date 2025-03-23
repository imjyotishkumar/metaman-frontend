"use client"
import Image from 'next/image';
import { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from 'next/link';




const Navbar = () => {
    const [isopen, setisopen] = useState(false)
  return (
    <div className={`flex p-2 md:ml-8 md:mr-8 ${!isopen?'items-center':''} bg-[#151517] w-100%  justify-between    `}>
        <div className=' '>
        <div className='md:hidden relative z-50 ml-4 md:ml-0 top-0 ' onClick={()=>setisopen(!isopen)}>
            {isopen? <RxCross2 />
            :
            
            <IoMenuSharp className='text-[22px]'/>

            }
       
        </div>
        <div className=' hidden md:flex font-[700] items-center gap-8 justify-between'>
            <button>Home</button>
            <button>Shop</button>
            <button>About Us</button>
            <button>Contact Us</button>

        </div>
        {isopen && <div className='flex p-6 absolute transition-all duration-700 ease-in-out  fixed  left-0 w-full h-screen bg-[#151517]   [text-align-last:left]  flex-col md:hidden font-[700]  gap-6'>
            <button>Home</button>
            <button>Shop</button>
            <button>About Us</button>
            <button>Contact Us</button>

        </div>}
        </div>
        <div className={`${isopen?'invisible':''}`}>
            
            <Link href="/">
            <Image src={'/assets/White_Logo_Metaman.avif'} alt='' width={100} height={100}/>
            </Link>
        </div>
        <div className={`${isopen?'invisible':''} text-xl`}><HiOutlineShoppingCart  />
        </div>
    </div>
  )
}

export default Navbar