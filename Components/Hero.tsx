import React from 'react'
import Image from 'next/image'
import favicon from '/public/favicon.ico'

const Hero = () => {
return(
<div className="space-y-1">
  <div className="hover:scale-80 ">
  <Image
    src={favicon}
    alt="Our Logo!"
    width={120}
    height={120}
  />
  </div>
  <div>
   <div>
    Welcome to Scholars Circle!
   </div>
   <div>
    The Social Circle for Scholars Everywhere!
   </div>
   <div className="flex flex-row space-x-2">
   <button> Join Us! </button>
   <button> Join Us! </button>
   </div>
  </div>
</div>
 )
}

export default Hero;