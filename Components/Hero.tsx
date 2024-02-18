import React from 'react'
import Image from 'next/image'
import favicon from '/app/favicon.ico'

const Hero = () => {
return(
 <div>
     <header className="bg-cyan-500 text-black sticky top-0 z-10" style={{ height: '50px' }}>
       <section className="max-w-4xl mx-auto p-2 flex justify-between items-center">
         <div className="w-1/6 h-87 relative">
        <Image
          src="/favicon.ico"
          width={120}
          height={120}
          alt="Our Logo!"
        />
         </div>
         <h1 className="text-7xl font-semibold">
           <p className="font-mono">Scholars' Circle</p>
         </h1>
       </section>
     </header>
     <hr className="h-2 my-90 bg-black border-0 z-40" />
     <br />
     <br />
     <h1 className="text-7xl font-semibold relative z-30">
       <p className="font-mono center">Connect to Peers <br /> Near you</p>
     </h1>
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-80 h-72 bg-yellow-100 rounded-2xl"></div>
   </div>
 )
}

export default Hero;