import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import github from '/public/github.svg'
import website from '/public/website.svg'

const Footer = () => {
return(
 <div className="fixed flex bottom-0 left-0 w-full bg-gray-300 py-1 px-4 justify-center items-center text-[14px]"> 
   <div className="flex flex-col text-center space-y-2"> 
    <div className="font-bold"> 
     ScholarsCircle © 2024
    </div>
    <div> 
     Made by: Luis Cardenas, Anna Katkova, Kaelyn Tan & Jerry Yong
    </div>
   <div className="flex justify-center">
   <div>  
   <Link href="https://github.com/KYUTI3/ScholarsCircle">
     <Image
      src={github}
      alt="Our GitHub Repository" 
      width={50}
      height={50}
      />
      </Link>
    </div> 
     <div> 
    <Link href="">
     <Image
     src={website}
     alt="Our Email!" 
     width={50}
     height={50}
     />
     </Link>
     </div>
   </div>
  </div>   
</div>
 );
};

export default Footer;