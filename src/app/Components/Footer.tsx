import React from 'react'
import Image from 'next/image'
import github from '/assets/github.svg'

const Footer = () => {
<div className="items-center " > 
    <div> 
     ScholarsCircle © 2024
    </div>
    <div> 
     Made by Luis Cardenas, Anna Katkova, Kaelyn Tan & ???
    </div>
    <Image
     src={github.svg}
     alt="Our GitHub Repository" 
    />
</div>





}