import React from 'react'
import Image from 'next/image'
import github from '/public/github.svg'


const Footer = () => {
return(
 <div className="fixed flex bottom-0 left-0 w-full bg-gray-300 py-4 px-6 justify-center items-center "> 
   <div className="flex flex-col text-center space-y-1.5"> 
    <div> 
     ScholarsCircle © 2024
    </div>
    <div> 
     Made by Luis Cardenas, Anna Katkova, Kaelyn Tan & Jerry Tong
    </div>
   <div className="flex justify-center">
    <Image
     src={github}
     alt="Our GitHub Repository" 
     width={60}
     height={60}
     />
     <Image
     src={github}
     alt="Our GitHub Repository" 
     width={60}
     height={60}
     />
   </div>
  </div>   
</div>
 );
};

export default Footer;