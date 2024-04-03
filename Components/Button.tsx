import React from 'react'
import Link from 'next/link'

const Button = () => {
return(
     <div className="border-2 rounded-full border-black w-72">
        <div className="bg-amber-300 text-black hover:bg-orange-300">   
            <Link href="/Welcome"> Sign Up!</Link>   
        </div>
    </div>
 )
}

export default Button