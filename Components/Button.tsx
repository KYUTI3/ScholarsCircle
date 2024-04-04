import React from 'react'
import Link from 'next/link'

const Button = () => {
return(
   <button className="bg-amber-300 text-black px-4 py-2 my-1 rounded-full">  
      <Link href="/Welcome"> Sign Up!</Link>
   </button>    
 )
}

export default Button