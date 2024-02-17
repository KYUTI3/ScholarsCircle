import React from 'react'
import Image from 'next/image'
import github from '/assets/github.svg'

const Footer = () => {
return(
 <div className="items-center bottom-0 bg-stone-400 " > 
    <div> 
     ScholarsCircle © 2024
    </div>
    <div> 
     Made by Luis Cardenas, Anna Katkova, Kaelyn Tan & ???
    </div>
    <Image
     src={github}
     alt="Our GitHub Repository" 
     width={90}
     height={90}
     />
  </div>

 );
};

export default Footer;