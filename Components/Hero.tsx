import React from 'react'
import Image from 'next/image'
import favicon from '/public/favicon.ico'

const Hero = () => {
return(
<div className="flex flex-col p-4 items-center space-y-1 text-gray-800 text-wrap border-2 rounded-md">
  <div className="hover:scale-80">
  <Image
    src={favicon}
    alt="Our Logo!"
    width={120}
    height={120}
  />
  </div>
  <div className="text-center space-y-1.5 subpixel-antialiased">
   <div className="font-bold">
    Welcome to ScholarsCircle!
   </div>
   <div>
    The Social Circle for Scholars Everywhere!
   </div>
   <div className=" mt-auto flex flex-row space-x-2 justify-items-center">
   <button> Join Us! </button>
   <button> Join Us! </button>
   </div>
  </div>
</div>
 )
}

export default Hero;