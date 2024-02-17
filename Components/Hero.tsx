import React from 'react'
import Image from 'next/image'
import favicon from '/app/favicon.ico'


const Hero = () => {
return(
 <div className="justify items-center ">
    <Image
      src={favicon}
      alt="Our Logo!"
      width={150} 
      height={150} 
    />
    <div>
     <div>
      Welcome to Scholars Circle!
     </div>
     <div>
      The Circle for Scholars Everywhere!
     </div>
     <div>
     <button> Join Us! </button>
     </div>
    </div>
 </div>

 )
}