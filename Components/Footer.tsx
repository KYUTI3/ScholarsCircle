import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import github from '/public/github.svg'
import website from '/public/website.svg'


const Footer = () => {
return(
 <div className="fixed flex bottom-0 left-0 w-full bg-gray-300 py-2 px-4 justify-center items-center size-10 "> 
   <div className="flex flex-col text-center space-y-2"> 
    <div className="font-bold"> 
     ScholarsCircle © 2024
    </div>
    <div> 
     Made by Luis Cardenas, Anna Katkova, Kaelyn Tan & Jerry Tong
    </div>
   <div className="flex justify-center">
    <Image
     src={github}
     alt="Our GitHub Repository" 
     width={50}
     height={50}
     />
     <Image
     src={website}
     alt="Our Landing Page!" 
     width={50}
     height={50}
     />
   </div>
  </div>   
</div>
 );
};

export default Footer;