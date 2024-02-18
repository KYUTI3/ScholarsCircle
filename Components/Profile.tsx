import React from 'react'

const Profile = () => {
return(
<div className="flex flex-col space-y-1 bg-blue-600 border rounded-md justify-items-center">
    <div className="space-x-2"> 
    <div className="font-bold text-[16px] underline-offset-2">
     ScholarCircle Account Information 
    </div>
    <div className="text-[12px]"> 
    <div>
     First Name   
    </div>
    <div>
     Last Name   
    </div>
    <div>
     Email   
    </div>
    </div>
  </div>
</div>
)
}

export default Profile;