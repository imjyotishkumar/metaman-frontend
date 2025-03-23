"use client"
import { useEffect, useState } from "react"

const Header = () => {
    const [flag, setflag] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setflag(prevflag=>(prevflag === 0 ? 1 : 0))
        }, 2000);
        return()=>clearInterval(interval)
    }, [])


    return (
        <div className="flex justify-center border-b-1 pb-2 border-white items-center m-2 font-[320] text-[12px] md:text-[13px] lg:text-[14px]">
            <p className={` ${flag === 0?'hidden':""}`}> Buy 2 @999  on 100LML. Limited Time Offer! </p>
            <p className={` ${flag === 1?'hidden':""}`}>BUY3 @999 on 1 100ml & 2 20ml. Limited time Offer!</p>
            
        </div>
    )
}

export default Header