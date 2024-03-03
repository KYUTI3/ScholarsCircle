import React from 'react'

const Profile = () => {
return(
<div className="flex flex-col space-y-2 bg-blue-600 border rounded-md justify-items-center">
    <div className="space-x-2"> 
        <div className="font-bold text-[16px] underline-offset-2 text-amber-400">
         ScholarsCircle Account Information 
        </div>
        <div className="text-[12px] w-32 my-2 text-white"> 
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