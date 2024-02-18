import React from 'react'
import Link from 'next/link';

const Footer = () => {
return(
    <div className="flex flex-row items-center space-x-4 mt-2 mb-2 top-0 place-content-center text-gray-800 font-bold font-sans text-[20px] py-3" > 
        <div className="hover:text-cyan-500"> 
         Home
        </div>
        <div className="hover:text-cyan-500"> 
         About 
        </div>
        <div className="hover:text-cyan-500"> 
         Profile
        </div>
    </div>
 )
}
    
export default Footer;