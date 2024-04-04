import React from 'react'
import favicon from '/public/favicon.ico'
import Image from 'next/image'


const Profile = () => {
return(
<div className="flex flex-col border-2 rounded-md text-center bg-gray-800 font-sans py-4 px-6 justify-center items-center">
    <div className="space-y-2"> 
      <div className="items-center ">
      <Image
      src={favicon}
      alt="Our Logo!"
      width={120}
      height={120}
      />     
      </div>
        <div className="font-semibold text-[16px] underline-offset-2 text-cyan-500 py-2">
         Account Information 
        </div>
        <div className="text-[12px] w-32 my-2 text-cyan-500 space-y-6"> 
         <div className="ring-2 ring-cyan-500">
            First Name   
         </div>
          <div className="ring-2 ring-cyan-500">
            Last Name   
          </div>
         <div className="ring-2 ring-cyan-500">
            Email   
         </div>
      </div>
   </div>
 </div>
 )
}

export default Profile;