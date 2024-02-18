import React from 'react'
import Link from 'next/link';

const Navbar = () => {
return(
    <div className="flex flex-row items-center space-x-4 mt-2 mb-2 top-0 place-content-center  font-semibold text-lg py-3" > 
        <div className="text-gray-800  hover:text-cyan-500"> 
         <Link href="/app/page.tsx">Home</Link>
        </div>
        <div className="text-gray-800 hover:text-cyan-500"> 
        <Link href="/app/page.tsx">About</Link>
        </div>
        <div className="text-gray-800 hover:text-cyan-500"> 
        <Link href="/app/Welcome/page.tsx">Profile</Link>
        </div>
    </div>
 )
}
    
export default Navbar;