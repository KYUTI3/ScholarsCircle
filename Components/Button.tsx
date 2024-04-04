import React from 'react'
import Link from 'next/link'

const Button = () => {
return(
   <button className="bg-amber-300 text-black hover:bg-orange-300 px-4 py-3 my-1 rounded-full">  
      <Link href="/Welcome"> Sign Up!</Link>
   </button>    
 )
}

export default Button